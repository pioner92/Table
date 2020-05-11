import React from 'react';

const TableName = (props) => {
    return (
        <div >
            {props.name.map((el)=>{
                return(
                    <h2 key={el.id}>{el.name}</h2>
                )
            })}
        </div>
    );
};

export default TableName;