import { createSelector } from '@ngrx/store';
import { FoldersState, getMailAppState, MailAppState } from 'app/main/apps/mail-ngrx/store/reducers';

export const getFoldersState = createSelector(
    getMailAppState,
    (state: MailAppState) => state.folders
);

export const getFolders = createSelector(
    getFoldersState,
    (state: FoldersState) => state.entities
);

export const getFoldersLoaded = createSelector(
    getFoldersState,
    (state: FoldersState) => state.loaded
);

export const getFoldersArr = createSelector(
    getFolders,
    (entities) => Object.keys(entities).map((id) => entities[id])
);
