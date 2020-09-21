import React from 'react';

import Stats from "./Stats";
import Description from "./Description";
import styles from  './Profile.module.css';

function Profile ({profilesData}){

    return profilesData.map((profile) =>{
        const {name, tag, location, avatar, stats}  = profile;
        const {followers, views, likes}  = stats;

        return(
            <div className={styles.profile} >
                <Description name = {name} tag = {tag} location= {location}  avatar= {avatar}/>
                <Stats  followers ={followers} views = {views} likes = {likes}/>
            </div>
        );
    })



}

export  default Profile

