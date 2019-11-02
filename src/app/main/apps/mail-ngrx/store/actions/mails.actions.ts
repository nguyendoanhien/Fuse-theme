import { Action } from '@ngrx/store';
import { Mail } from 'app/main/apps/mail-ngrx/mail.model';

export const GET_MAILS = '[MAILS] GET MAILS';
export const GET_MAILS_SUCCESS = '[MAILS] GET MAILS SUCCESS';
export const GET_MAILS_FAILED = '[MAILS] GET MAILS FAILED';
export const SET_CURRENT_MAIL = '[MAILS] SET CURRENT MAIL';
export const SET_CURRENT_MAIL_SUCCESS = '[MAILS] SET CURRENT MAIL SUCCESS';
export const CHECK_CURRENT_MAIL = '[MAILS] CHECK CURRENT MAIL';
export const UPDATE_MAIL = '[MAILS] UPDATE MAIL';
export const UPDATE_MAIL_SUCCESS = '[MAILS] UPDATE MAIL SUCCESS';
export const UPDATE_MAILS = '[MAILS] UPDATE MAILS';
export const UPDATE_MAILS_SUCCESS = '[MAILS] UPDATE MAILS SUCCESS';
export const SET_SEARCH_TEXT = '[MAILS] SET SEARCH TEXT';
export const SELECT_ALL_MAILS = '[MAILS] SELECT ALL MAILS';
export const DESELECT_ALL_MAILS = '[MAILS] DESELECT ALL MAILS';
export const TOGGLE_IN_SELECTED_MAILS = '[MAILS] TOGGLE IN SELECTED MAILS';
export const SELECT_MAILS_BY_PARAMETER = '[MAILS] SELECT MAILS BY PARAMETER';
export const SET_FOLDER_ON_SELECTED_MAILS = '[MAILS] SET FOLDER ON SELECTED MAILS';
export const ADD_LABEL_ON_SELECTED_MAILS = '[MAILS] ADD LABEL ON SELECTED MAILS';

/**
 * Get Mails
 */
export class GetMails implements Action
{
    readonly type = GET_MAILS;

    constructor()
    {
    }
}

/**
 * Get Mails Success
 */
export class GetMailsSuccess implements Action
{
    readonly type = GET_MAILS_SUCCESS;

    constructor(public payload: any)
    {
    }
}

/**
 * Get Mails Failed
 */
export class GetMailsFailed implements Action
{
    readonly type = GET_MAILS_FAILED;

    constructor(public payload: string)
    {
    }
}

/**
 * Set Current Mail
 */
export class SetCurrentMail implements Action
{
    readonly type = SET_CURRENT_MAIL;

    constructor(public payload: string)
    {
    }
}

/**
 * Set Current Mail Success
 */
export class SetCurrentMailSuccess implements Action
{
    readonly type = SET_CURRENT_MAIL_SUCCESS;

    constructor(public payload: any)
    {
    }
}

/**
 * Check Current Mail
 */
export class CheckCurrentMail implements Action
{
    readonly type = CHECK_CURRENT_MAIL;

    constructor()
    {
    }
}

/**
 * Update Mail
 */
export class UpdateMail implements Action
{
    readonly type = UPDATE_MAIL;

    constructor(public payload: any)
    {
    }
}

/**
 * Update Mail Success
 */
export class UpdateMailSuccess implements Action
{
    readonly type = UPDATE_MAIL_SUCCESS;

    constructor(public payload: Mail)
    {
    }
}

/**
 * Update Mails
 */
export class UpdateMails implements Action
{
    readonly type = UPDATE_MAILS;

    constructor(public payload: Mail[])
    {
    }
}

/**
 * Update Mails Success
 */
export class UpdateMailsSuccess implements Action
{
    readonly type = UPDATE_MAILS_SUCCESS;

    constructor()
    {
    }
}

/**
 * Set Search Text
 */
export class SetSearchText implements Action
{
    readonly type = SET_SEARCH_TEXT;

    constructor(public payload: string)
    {
    }
}

/**
 * Select All Mails
 */
export class SelectAllMails implements Action
{
    readonly type = SELECT_ALL_MAILS;

    constructor()
    {
    }
}

/**
 * Deselect All Mails
 */
export class DeselectAllMails implements Action
{
    readonly type = DESELECT_ALL_MAILS;

    constructor()
    {
    }
}

/**
 * Toggle In Selected Mails
 */
export class ToggleInSelectedMails implements Action
{
    readonly type = TOGGLE_IN_SELECTED_MAILS;

    constructor(public payload: string)
    {
    }
}

/**
 * Select Mails by Parameter
 */
export class SelectMailsByParameter implements Action
{
    readonly type = SELECT_MAILS_BY_PARAMETER;

    constructor(public payload: any)
    {
    }
}

/**
 * Set Folder on Selected Mails
 */
export class SetFolderOnSelectedMails implements Action
{
    readonly type = SET_FOLDER_ON_SELECTED_MAILS;

    constructor(public payload: string)
    {
    }
}

/**
 * Add label on Selected Mails
 */
export class AddLabelOnSelectedMails implements Action
{
    readonly type = ADD_LABEL_ON_SELECTED_MAILS;

    constructor(public payload: string)
    {
    }
}

export type MailsActionsAll
    = GetMails
    | GetMailsSuccess
    | GetMailsFailed
    | SetCurrentMail
    | SetCurrentMailSuccess
    | CheckCurrentMail
    | UpdateMail
    | UpdateMailSuccess
    | UpdateMails
    | UpdateMailsSuccess
    | SetSearchText
    | SelectAllMails
    | DeselectAllMails
    | ToggleInSelectedMails
    | SelectMailsByParameter
    | SetFolderOnSelectedMails
    | AddLabelOnSelectedMails;
