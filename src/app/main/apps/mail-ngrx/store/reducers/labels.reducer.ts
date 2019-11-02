import * as LabelsActions from 'app/main/apps/mail-ngrx/store/actions/labels.actions';

export interface LabelsState
{
    entities?: { [id: number]: any };
    loading: boolean;
    loaded: boolean;
}

export const LabelsInitialState: LabelsState = {
    entities: {},
    loading : false,
    loaded  : false
};

export function LabelsReducer(state = LabelsInitialState, action: LabelsActions.LabelsActionsAll): LabelsState
{
    switch ( action.type )
    {
        case LabelsActions.GET_LABELS:
            return {
                ...state,
                loading: true,
                loaded : false
            };
        case LabelsActions.GET_LABELS_SUCCESS:

            const labels = action.payload;
            const entities = labels.reduce(
                (_entities: { [id: number]: any }, label: any) => {
                    return {
                        ..._entities,
                        [label.id]: label
                    };
                }, {});

            return {
                ...state,
                loading: false,
                loaded : true,
                entities
            };

        case LabelsActions.GET_LABELS_FAILED:
            return {
                ...state,
                loading: false,
                loaded : false
            };
        default:
            return state;
    }
}
