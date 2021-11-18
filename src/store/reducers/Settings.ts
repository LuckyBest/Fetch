import { TYPE_REDUCER } from "../../utils/constants"

const initialState = {
    UsersList:[],
}

export type GlobalStateT = typeof initialState; 
export type UsersListT = typeof initialState['UsersList'];

export const Settings = (state:GlobalStateT = initialState, action:any) => {
    switch(action['type']){

        case TYPE_REDUCER.SET_USERS:{
            const stateCopied: GlobalStateT = state;
            let UsersListCopied: UsersListT[] = stateCopied['UsersList'];
            UsersListCopied = action.payload;

            return {
                ...state,
                UsersList: UsersListCopied
            }
        }

        default:{
            return{
                ...state
            }
        }
    }
}