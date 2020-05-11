import React from 'react';
import Titles from './Tables_components/Titles/Titles';
import TableDate from './Tables_components/TableDate/TableDate';
import TableName from './Tables_components/TableName/TableName';
import TableCount from './Tables_components/TableCount/TableCount';
import TableDistance from './Tables_components/TableDistance/TableDistance';

import styles from './Tables.module.scss'


const Tables = (props) => {
    const Pagination = (index) => {
        props.Pagination(index)
    }
    return (
        <div className={styles.tables}>
            <Titles/>
            <div className={styles.tables_columns}>
                <TableDate date={props.dataFilter_Pagination}/>
                <TableName name={props.dataFilter_Pagination}/>
                <TableCount count={props.dataFilter_Pagination}/>
                <TableDistance distance={props.dataFilter_Pagination}/>
            </div>
            <div className={styles.pagination}>
                {props.dataAll.slice(0, Math.ceil(props.dataAll.length / 10)).map((el, index) => {
                    return (
                        <a onClick={() => Pagination(index)} href={'#' + (index + 1)} key={el.id}>{index + 1} </a>
                    )
                })}
            </div>
        </div>
    );
};

export default Tables;