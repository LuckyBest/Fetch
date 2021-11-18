import React, { FC } from 'react';
import s from './ProfileListItem.module.scss';

type ProfileListItemT = {
    imgUrl: string,
    username : string,
    // reposData: string,
};

export const ProfileListItem:FC<ProfileListItemT> = ({...props}):JSX.Element => {

    const {imgUrl, username} = props;

    return (
            <div className = {s.container}>
                <div className = {s.container_content}>
                    <div className = {s.container_content_img}>
                        <img src={imgUrl} alt="img" />
                    </div>
                    <div className = {s.container_content_name}>
                        {username}
                    </div>
                </div>
                <div className = {s.container_repos_data}>
                        qweqweqwe
                </div>
            </div>
    )
}
