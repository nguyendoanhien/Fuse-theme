import * as MailsActions from 'app/main/apps/mail-ngrx/store/actions/mails.actions';
import { Mail } from 'app/main/apps/mail-ngrx/mail.model';

export interface MailsState
{
    entities?: { [id: number]: Mail };
    currentMail: any;
    selectedMailIds: string[];
    searchText: string;
    loading: boolean;
    loaded: any;
}

export const MailsInitialState: MailsState = {
    entities       : {},
    currentMail    : null,
    selectedMailIds: [],
    searchText     : '',
    loading        : false,
    loaded         : false
};

export function MailsReducer(state = MailsInitialState, action: MailsActions.MailsActionsAll): MailsState
{
    switch ( action.type )
    {
        case MailsActions.GET_MAILS:
        {
            return {
                ...state,
                loading: true
            };
        }

        case MailsActions.GET_MAILS_SUCCESS:
        {

            const mails = action.payload.mails;
            const loaded = action.payload.loaded;
            const entities = mails.reduce(
                (_entities: { [id: number]: Mail }, mail: Mail) => {
                    return {
                        ..._entities,
                        [mail.id]: mail
                    };
                }, {});

            return {
                ...state,
                entities,
                loading: false,
                loaded
            };
        }

        case MailsActions.GET_MAILS_FAILED:
        {
            return {
                ...state,
                loading: false,
                loaded : false
            };
        }

        case MailsActions.SET_CURRENT_MAIL_SUCCESS:
        {
            return {
                ...state,
                currentMail: action.payload
            };
        }

        case MailsActions.UPDATE_MAIL_SUCCESS:
        {
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [action.payload.id]: action.payload
                }
            };
        }

        case MailsActions.SET_SEARCH_TEXT:
        {

            return {
                ...state,
                searchText: action.payload
            };
        }

        case MailsActions.TOGGLE_IN_SELECTED_MAILS:
        {

            const mailId = action.payload;

            let selectedMailIds = [...state.selectedMailIds];

            if ( selectedMailIds.find(id => id === mailId) !== undefined )
            {
                selectedMailIds = selectedMailIds.filter(id => id !== mailId);
            }
            else
            {
                selectedMailIds = [...selectedMailIds, mailId];
            }

            return {
                ...state,
                selectedMailIds
            };
        }

        case MailsActions.SELECT_ALL_MAILS:
        {
            const arr = Object.keys(state.entities).map(k => state.entities[k]);

            const selectedMailIds = arr.map(mail => mail.id);

            return {
                ...state,
                selectedMailIds
            };
        }

        case MailsActions.DESELECT_ALL_MAILS:
        {
            return {
                ...state,
                selectedMailIds: []
            };
        }

        case MailsActions.SELECT_MAILS_BY_PARAMETER:
        {
            const filter = action.payload;
            const arr = Object.keys(state.entities).map(k => state.entities[k]);
            const selectedMailIds = arr.filter(mail => mail[filter.parameter] === filter.value)
                                       .map(mail => mail.id);
            return {
                ...state,
                selectedMailIds
            };
        }

        case MailsActions.SET_FOLDER_ON_SELECTED_MAILS:
        {
            const entities = {...state.entities};

            state.selectedMailIds.map(id => {
                entities[id] = {
                    ...entities[id],
                    folder: action.payload
                };
            });

            return {
                ...state,
                entities
            };
        }

        default:
            return state;
    }
}
