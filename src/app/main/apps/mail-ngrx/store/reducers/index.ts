import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { MailsReducer, MailsState } from './mails.reducer';
import { FoldersReducer, FoldersState } from './folders.reducer';
import { FiltersReducer, FiltersState } from './filters.reducer';
import { LabelsReducer, LabelsState } from './labels.reducer';

export interface MailAppState
{
    mails: MailsState;
    folders: FoldersState;
    filters: FiltersState;
    labels: LabelsState;
}

export const getMailAppState = createFeatureSelector<MailAppState>(
    'mail-app'
);

export const getAppState = createSelector(
    getMailAppState,
    (state: MailAppState) => state
);

export const reducers: ActionReducerMap<MailAppState> = {
    mails  : MailsReducer,
    folders: FoldersReducer,
    filters: FiltersReducer,
    labels : LabelsReducer
};

export * from './mails.reducer';
export * from './folders.reducer';
export * from './filters.reducer';
export * from './labels.reducer';
