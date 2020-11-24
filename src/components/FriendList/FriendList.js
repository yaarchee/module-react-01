import React from "react";
import FriendListItem from "./FriendListItem";
import style from "./FriendList.module.css";

export default function FriendList({ friendList }) {
  return friendList.length > 0 ? (
    <ul className={style.friendList}>
      {friendList.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  ) : null;
}
