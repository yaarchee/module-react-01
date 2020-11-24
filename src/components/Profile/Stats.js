import React from "react";
import styles from "./Stats.module.css";

export default function Stats({ followers, views, likes }) {
  console.log();
  return (
    <ul className={styles.stats}>
      <li className={styles.item}>
        <p className={styles.label}>Followers</p>
        <p className={styles.quantity}>{followers}</p>
      </li>
      <li className={styles.item}>
        <p className={styles.label}>Views</p>
        <p className={styles.quantity}>{views}</p>
      </li>
      <li className={styles.item}>
        <p className={styles.label}>Likes</p>
        <p className={styles.quantity}>{likes}</p>
      </li>
    </ul>
  );
}
