import React from "react";
import styles from "./StatisticsList.module.css"


export default  function StatisticsList({statistics}){

    return(
        <ul className={styles.statList} >
            {
                statistics.map(stat=>(

                <li className={styles.item} style={{backgroundColor: getColor()}} key={stat.id}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage} %</span>
                    </li>
                    )
                 )
            }

        </ul>
    )
}


function getColor() {
    return `rgb(${setRandomColor() },${setRandomColor() },${setRandomColor() })`
}

function setRandomColor() {
    let rand = 0 + Math.random() * (255 + 1 - 0);
    return Math.floor(rand);
}

