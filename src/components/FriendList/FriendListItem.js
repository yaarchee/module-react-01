import React from "react";
import style from "./FriendListItem.module.css"


export default function FriendListItem({avatar, name, isOnline }) {
    const isStatus = isOnline? style.isOnline: style.isOffline;
    return(
        <li className={style.item}>
            <span className={isStatus}>
            </span>
            <img className={style.avatar} src={avatar} alt="" width="64"/>
            <p className="name">{name}</p>
        </li>
    );
}