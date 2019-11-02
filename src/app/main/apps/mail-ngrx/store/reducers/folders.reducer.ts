import * as FoldersActions from 'app/main/apps/mail-ngrx/store/actions/folders.actions';

export interface FoldersState
{
    entities?: { [id: number]: any };
    loading: boolean;
    loaded: boolean;
}

export const FoldersInitialState: FoldersState = {
    entities: {},
    loading : false,
    loaded  : false
};

export function FoldersReducer(state = FoldersInitialState, action: FoldersActions.FoldersActionsAll): FoldersState
{
    switch ( action.type )
    {
        case FoldersActions.GET_FOLDERS:
            return {
                ...state,
                loading: true,
                loaded : false
            };
        case FoldersActions.GET_FOLDERS_SUCCESS:

            const folders = action.payload;
            const entities = folders.reduce(
                (_entities: { [id: number]: any }, folder: any) => {
                    return {
                        ..._entities,
                        [folder.id]: folder
                    };
                }, {});

            return {
                ...state,
                loading: false,
                loaded : true,
                entities
            };

        case FoldersActions.GET_FOLDERS_FAILED:
            return {
                ...state,
                loading: false,
                loaded : false
            };
        default:
            return state;
    }
}
