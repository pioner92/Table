import React from 'react';

const TableDistance = (props) => {
    return (

        <div>
            {props.distance.map((el)=>{
                return(
                    <h2 key={el.id}>{el.distance}</h2>
                )
            })}
        </div>


    );
};

export default TableDistance;