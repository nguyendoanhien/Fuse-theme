import { createSelector } from '@ngrx/store';
import { FiltersState, getMailAppState, MailAppState } from 'app/main/apps/mail-ngrx/store/reducers';

export const getFiltersState = createSelector(
    getMailAppState,
    (state: MailAppState) => state.filters
);

export const getFilters = createSelector(
    getFiltersState,
    (state: FiltersState) => state.entities
);

export const getFiltersLoaded = createSelector(
    getFiltersState,
    (state: FiltersState) => state.loaded
);

export const getFiltersArr = createSelector(
    getFilters,
    (entities) => Object.keys(entities).map((id) => entities[id])
);
