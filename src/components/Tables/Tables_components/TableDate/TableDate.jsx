import React from 'react';

const TableDate = (props) => {
    let dat = new Date('2010-08-05')
    return (
        <div>
            {props.date.map((el)=>{

                return(
                    <h2 key={el.id}>{el.date.slice(0,10)}</h2>
                )
            })}
        </div>
    );
};

export default TableDate;