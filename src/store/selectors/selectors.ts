import { UsersListT } from './../reducers/Settings';

export const getUsersList = ({...state}) => {
    const usersList: UsersListT = state['Configurations']['UsersList'];
    return usersList;
};