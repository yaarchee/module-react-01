import React from "react";

import Stats from "./Stats";
import Description from "./Description";
import styles from "./Profile.module.css";

function Profile({ profilesData }) {
  return profilesData.map(({ name, tag, location, avatar, stats }) => {
    console.log(stats);
    return (
      <div className={styles.profile} key={name}>
        <Description
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <Stats {...stats} />
      </div>
    );
  });
}

export default Profile;
