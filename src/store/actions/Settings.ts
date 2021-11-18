import axios from "axios";
import { TYPE_REDUCER } from "../../utils/constants";


export const fetchUsersData = () => (dispatch:any) => {
    axios.get('https://api.github.com/search/users?q=type%3Auser').then((response:any) => {
        dispatch(setUsers(response['data']['items']));
    })
}

export const setUsers = (data:any) => ({
    type: TYPE_REDUCER.SET_USERS,
    payload: data,
});