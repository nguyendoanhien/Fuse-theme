import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { Todo } from 'app/main/apps/todo/todo.model';

@Injectable()
export class TodoService implements Resolve<any>
{
    todos: Todo[];
    selectedTodos: Todo[];
    currentTodo: Todo;
    searchText: string;
    filters: any[];
    tags: any[];
    routeParams: any;

    onTodosChanged: BehaviorSubject<any>;
    onSelectedTodosChanged: BehaviorSubject<any>;
    onCurrentTodoChanged: BehaviorSubject<any>;
    onFiltersChanged: BehaviorSubject<any>;
    onTagsChanged: BehaviorSubject<any>;
    onSearchTextChanged: BehaviorSubject<any>;
    onNewTodoClicked: Subject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     * @param {Location} _location
     */
    constructor(
        private _httpClient: HttpClient,
        private _location: Location
    )
    {
        // Set the defaults
        this.selectedTodos = [];
        this.searchText = '';
        this.onTodosChanged = new BehaviorSubject([]);
        this.onSelectedTodosChanged = new BehaviorSubject([]);
        this.onCurrentTodoChanged = new BehaviorSubject([]);
        this.onFiltersChanged = new BehaviorSubject([]);
        this.onTagsChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new BehaviorSubject('');
        this.onNewTodoClicked = new Subject();
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getFilters(),
                this.getTags(),
                this.getTodos()
            ]).then(
                () => {
                    if ( this.routeParams.todoId )
                    {
                        this.setCurrentTodo(this.routeParams.todoId);
                    }
                    else
                    {
                        this.setCurrentTodo(null);
                    }

                    this.onSearchTextChanged.subscribe(searchText => {
                        if ( searchText !== '' )
                        {
                            this.searchText = searchText;
                            this.getTodos();
                        }
                        else
                        {
                            this.searchText = searchText;
                            this.getTodos();
                        }
                    });
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get all filters
     *
     * @returns {Promise<any>}
     */
    getFilters(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/todo-filters')
                .subscribe((response: any) => {
                    this.filters = response;
                    this.onFiltersChanged.next(this.filters);
                    resolve(this.filters);
                }, reject);
        });
    }

    /**
     * Get all tags
     *
     * @returns {Promise<any>}
     */
    getTags(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/todo-tags')
                .subscribe((response: any) => {
                    this.tags = response;
                    this.onTagsChanged.next(this.tags);
                    resolve(this.tags);
                }, reject);
        });
    }

    /**
     * Get todos
     *
     * @returns {Promise<Todo[]>}
     */
    getTodos(): Promise<Todo[]>
    {
        if ( this.routeParams.tagHandle )
        {
            return this.getTodosByTag(this.routeParams.tagHandle);
        }

        if ( this.routeParams.filterHandle )
        {
            return this.getTodosByFilter(this.routeParams.filterHandle);
        }

        return this.getTodosByParams(this.routeParams);
    }

    /**
     * Get todos by params
     *
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    getTodosByParams(handle): Promise<Todo[]>
    {
        return new Promise((resolve, reject) => {

            this._httpClient.get('api/todo-todos')
                .subscribe((todos: any) => {
                    this.todos = todos.map(todo => {
                        return new Todo(todo);
                    });

                    this.todos = FuseUtils.filterArrayByString(this.todos, this.searchText);

                    this.onTodosChanged.next(this.todos);

                    resolve(this.todos);
                });
        });
    }

    /**
     * Get todos by filter
     *
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    getTodosByFilter(handle): Promise<Todo[]>
    {

        let param = handle + '=true';

        if ( handle === 'dueDate' )
        {
            param = handle + '=^$|\\s+';
        }

        return new Promise((resolve, reject) => {

            this._httpClient.get('api/todo-todos?' + param)
                .subscribe((todos: any) => {

                    this.todos = todos.map(todo => {
                        return new Todo(todo);
                    });

                    this.todos = FuseUtils.filterArrayByString(this.todos, this.searchText);

                    this.onTodosChanged.next(this.todos);

                    resolve(this.todos);

                }, reject);
        });
    }

    /**
     * Get todos by tag
     *
     * @param handle
     * @returns {Promise<Todo[]>}
     */
    getTodosByTag(handle): Promise<Todo[]>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/todo-tags?handle=' + handle)
                .subscribe((tags: any) => {

                    const tagId = tags[0].id;

                    this._httpClient.get('api/todo-todos?tags=' + tagId)
                        .subscribe((todos: any) => {

                            this.todos = todos.map(todo => {
                                return new Todo(todo);
                            });

                            this.todos = FuseUtils.filterArrayByString(this.todos, this.searchText);

                            this.onTodosChanged.next(this.todos);

                            resolve(this.todos);

                        }, reject);
                });
        });
    }

    /**
     * Toggle selected todo by id
     *
     * @param id
     */
    toggleSelectedTodo(id): void
    {
        // First, check if we already have that todo as selected...
        if ( this.selectedTodos.length > 0 )
        {
            for ( const todo of this.selectedTodos )
            {
                // ...delete the selected todo
                if ( todo.id === id )
                {
                    const index = this.selectedTodos.indexOf(todo);

                    if ( index !== -1 )
                    {
                        this.selectedTodos.splice(index, 1);

                        // Trigger the next event
                        this.onSelectedTodosChanged.next(this.selectedTodos);

                        // Return
                        return;
                    }
                }
            }
        }

        // If we don't have it, push as selected
        this.selectedTodos.push(
            this.todos.find(todo => {
                return todo.id === id;
            })
        );

        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void
    {
        if ( this.selectedTodos.length > 0 )
        {
            this.deselectTodos();
        }
        else
        {
            this.selectTodos();
        }

    }

    /**
     * Select todos
     *
     * @param filterParameter
     * @param filterValue
     */
    selectTodos(filterParameter?, filterValue?): void
    {
        this.selectedTodos = [];

        // If there is no filter, select all todos
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedTodos = this.todos;
        }
        else
        {
            this.selectedTodos.push(...
                this.todos.filter(todo => {
                    return todo[filterParameter] === filterValue;
                })
            );
        }

        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    }

    /**
     * Deselect todos
     */
    deselectTodos(): void
    {
        this.selectedTodos = [];

        // Trigger the next event
        this.onSelectedTodosChanged.next(this.selectedTodos);
    }

    /**
     * Set current todo by id
     *
     * @param id
     */
    setCurrentTodo(id): void
    {
        this.currentTodo = this.todos.find(todo => {
            return todo.id === id;
        });

        this.onCurrentTodoChanged.next([this.currentTodo, 'edit']);

        const tagHandle    = this.routeParams.tagHandle,
              filterHandle = this.routeParams.filterHandle;

        if ( tagHandle )
        {
            this._location.go('apps/todo/tag/' + tagHandle + '/' + id);
        }
        else if ( filterHandle )
        {
            this._location.go('apps/todo/filter/' + filterHandle + '/' + id);
        }
        else
        {
            this._location.go('apps/todo/all/' + id);
        }
    }

    /**
     * Toggle tag on selected todos
     *
     * @param tagId
     */
    toggleTagOnSelectedTodos(tagId): void
    {
        this.selectedTodos.map(todo => {
            this.toggleTagOnTodo(tagId, todo);
        });
    }

    /**
     * Toggle tag on todo
     *
     * @param tagId
     * @param todo
     */
    toggleTagOnTodo(tagId, todo): void
    {
        const index = todo.tags.indexOf(tagId);

        if ( index !== -1 )
        {
            todo.tags.splice(index, 1);
        }
        else
        {
            todo.tags.push(tagId);
        }

        this.updateTodo(todo);
    }

    /**
     * Has tag?
     *
     * @param tagId
     * @param todo
     * @returns {boolean}
     */
    hasTag(tagId, todo): any
    {
        if ( !todo.tags )
        {
            return false;
        }

        return todo.tags.indexOf(tagId) !== -1;
    }

    /**
     * Update the todo
     *
     * @param todo
     * @returns {Promise<any>}
     */
    updateTodo(todo): any
    {
        return new Promise((resolve, reject) => {

            this._httpClient.post('api/todo-todos/' + todo.id, {...todo})
                .subscribe(response => {

                    this.getTodos().then(todos => {

                        resolve(todos);

                    }, reject);
                });
        });
    }
}
