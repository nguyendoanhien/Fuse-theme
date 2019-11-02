import * as FiltersActions from 'app/main/apps/mail-ngrx/store/actions/filters.actions';

export interface FiltersState
{
    entities?: { [id: number]: any };
    loading: boolean;
    loaded: boolean;
}

export const FiltersInitialState: FiltersState = {
    entities: {},
    loading : false,
    loaded  : false
};

export function FiltersReducer(state = FiltersInitialState, action: FiltersActions.FiltersActionsAll): FiltersState
{
    switch ( action.type )
    {
        case FiltersActions.GET_FILTERS:
            return {
                ...state,
                loading: true,
                loaded : false
            };
        case FiltersActions.GET_FILTERS_SUCCESS:

            const filters = action.payload;
            const entities = filters.reduce(
                (_entities: { [id: number]: any }, filter: any) => {
                    return {
                        ..._entities,
                        [filter.id]: filter
                    };
                }, {});

            return {
                ...state,
                loading: false,
                loaded : true,
                entities
            };

        case FiltersActions.GET_FILTERS_FAILED:
            return {
                ...state,
                loading: false,
                loaded : false
            };
        default:
            return state;
    }
}
