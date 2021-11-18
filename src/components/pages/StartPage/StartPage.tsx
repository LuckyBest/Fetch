import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from '../../../store/actions/Settings';
import { UsersListT } from '../../../store/reducers/Settings';
import { getUsersList } from '../../../store/selectors/selectors';
import { ProfileListItem } from '../../ProfileListItem/ProfileListItem';
import s from './StartPage.module.scss';

export const StartPage = ({...props}):JSX.Element => {

    const dispatch = useDispatch();
    const UsersDataList:UsersListT = useSelector(getUsersList);
    const [isFetching, setIsFetching] = React.useState<boolean>(false);

    React.useEffect(() => {

        if(!isFetching){

            dispatch(fetchUsersData());
            setIsFetching(true);
        }
    },[isFetching]);


    console.log('isFetching', isFetching);
    

    console.log('UsersDataList', UsersDataList);
    


    return (
        <div className = {s.container}>
            <div className = {s.container_header}>
                <input type="text" />
            </div>
            <div className = {s.container_wrap}>
                {
                    isFetching && UsersDataList.map((item, index) => {
                        return(
                            <ProfileListItem 
                                imgUrl = {item['avatar_url']}
                                username = {item['login']}                       
                            />
                        )
                    })
                }
                
            </div>
        </div>
    )
}
