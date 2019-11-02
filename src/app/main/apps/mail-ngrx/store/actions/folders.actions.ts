import { Action } from '@ngrx/store';

export const GET_FOLDERS = '[FOLDERS] GET FOLDERS';
export const GET_FOLDERS_SUCCESS = '[FOLDERS] GET FOLDERS SUCCESS';
export const GET_FOLDERS_FAILED = '[FOLDERS] GET FOLDERS FAILED';

/**
 * Get Folders
 */
export class GetFolders implements Action
{
    readonly type = GET_FOLDERS;

    constructor(public payload: any)
    {
    }
}

/**
 * Get Folders Success
 */
export class GetFoldersSuccess implements Action
{
    readonly type = GET_FOLDERS_SUCCESS;

    constructor(public payload: any)
    {
    }
}

/**
 * Get Folders Failed
 */
export class GetFoldersFailed implements Action
{
    readonly type = GET_FOLDERS_FAILED;

    constructor(public payload: string)
    {
    }
}

export type FoldersActionsAll
    = GetFolders
    | GetFoldersSuccess
    | GetFoldersFailed;
