import React from 'react';
import StatisticsList from "./StatisticsList";
import styles from './Statistics.module.css'



export default  function Statistics ({statistics, title}) {

    return (
        <section className={styles.statistics}>
            {title.length > 0 && <h2 className={styles.title}>{title}</h2>}

            <StatisticsList statistics={statistics}/>
        </section>





);
}