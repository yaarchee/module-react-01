import React from "react";
import style from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? style.isOnline : style.isOffline;
  return (
    <li className={style.item}>
      <span className={statusClass}></span>
      <img className={style.avatar} src={avatar} alt="" width="64" />
      <p>{name}</p>
    </li>
  );
}
