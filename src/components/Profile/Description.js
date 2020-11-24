import PropTypes from "prop-types";
import React from "react";
import styles from "./Description.module.css";

export default function Description({ name, tag, location, avatar }) {
  return (
    <div className={styles.description}>
      <img src={avatar} alt={name} className={styles.avatar} width="100px" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
}

Description.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
