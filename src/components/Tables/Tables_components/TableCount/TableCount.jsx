import React from 'react';

const TableCount = (props) => {
    return (

        <div>
            {props.count.map((el)=>{
                return(
                    <h2 key={el.id}>{el.count}</h2>
                )
            })}
        </div>
    );
};

export default TableCount;