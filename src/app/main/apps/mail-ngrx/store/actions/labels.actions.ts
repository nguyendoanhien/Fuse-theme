import { Action } from '@ngrx/store';

export const GET_LABELS = '[LABELS] GET LABELS';
export const GET_LABELS_SUCCESS = '[LABELS] GET LABELS SUCCESS';
export const GET_LABELS_FAILED = '[LABELS] GET LABELS FAILED';

/**
 * Get Labels
 */
export class GetLabels implements Action
{
    readonly type = GET_LABELS;

    constructor(public payload: any)
    {
    }
}

/**
 * Get Labels Success
 */
export class GetLabelsSuccess implements Action
{
    readonly type = GET_LABELS_SUCCESS;

    constructor(public payload: any)
    {
    }
}

/**
 * Get Labels Failed
 */
export class GetLabelsFailed implements Action
{
    readonly type = GET_LABELS_FAILED;

    constructor(public payload: string)
    {
    }
}

export type LabelsActionsAll
    = GetLabels
    | GetLabelsSuccess
    | GetLabelsFailed;
