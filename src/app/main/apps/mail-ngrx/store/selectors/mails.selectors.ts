import { FuseUtils } from '@fuse/utils';

import { createSelector } from '@ngrx/store';
import { getMailAppState, MailAppState, MailsState } from 'app/main/apps/mail-ngrx/store/reducers';

export const getMailsState = createSelector(
    getMailAppState,
    (state: MailAppState) => state.mails
);

export const getMails = createSelector(
    getMailsState,
    (state: MailsState) => state.entities
);

export const getMailsLoaded = createSelector(
    getMailsState,
    (state: MailsState) => state.loaded
);

export const getSearchText = createSelector(
    getMailsState,
    (state: MailsState) => state.searchText
);

export const getMailsArr = createSelector(
    getMails,
    getSearchText,
    (entities, searchText) => {
        const arr = Object.keys(entities).map((id) => entities[id]);
        return FuseUtils.filterArrayByString(arr, searchText);
    }
);

export const getCurrentMail = createSelector(
    getMailsState,
    (state: MailsState) => state.currentMail
);

export const getSelectedMailIds = createSelector(
    getMailsState,
    (state: MailsState) => state.selectedMailIds
);
