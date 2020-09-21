import React from "react";
import FriendListItem from "./FriendListItem"
import style from "./FriendList.module.css"

export default function FriendList({friendList}) {

    return (
        <ul className={style.friendList}>
            {friendList.map(friend=>{
                const {id, avatar, name, isOnline } = friend
                return (<FriendListItem key={id}
                                        avatar={avatar}
                                        name={name}
                                        isOnline={isOnline} />);
            })}
        </ul>
    )
}