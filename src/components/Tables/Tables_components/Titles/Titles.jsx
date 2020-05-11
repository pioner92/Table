import React from 'react';
import styles from '../../Tables.module.scss'


const Titles = () => {
    return (
        <div className={styles.titles_columns}>
            <div>Дата</div>
            <div>Название</div>
            <div>Количество</div>
            <div>Расстояние</div>
        </div>
    );
};

export default Titles;