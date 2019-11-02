import { Action } from '@ngrx/store';

export const GET_FILTERS = '[FILTERS] GET FILTERS';
export const GET_FILTERS_SUCCESS = '[FILTERS] GET FILTERS SUCCESS';
export const GET_FILTERS_FAILED = '[FILTERS] GET FILTERS FAILED';

/**
 * Get Filters
 */
export class GetFilters implements Action
{
    readonly type = GET_FILTERS;

    constructor(public payload: any)
    {
    }
}

/**
 * Get Filters Success
 */
export class GetFiltersSuccess implements Action
{
    readonly type = GET_FILTERS_SUCCESS;

    constructor(public payload: any)
    {
    }
}

/**
 * Get Filters Failed
 */
export class GetFiltersFailed implements Action
{
    readonly type = GET_FILTERS_FAILED;

    constructor(public payload: string)
    {
    }
}

export type FiltersActionsAll
    = GetFilters
    | GetFiltersSuccess
    | GetFiltersFailed;
