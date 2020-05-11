import React from 'react';

const SelectTable = (props) => {

    const SelectTable = (e)=>{
        props.SelectTableNumber(e)
    }
    return (
        <div>
        <select onChange={SelectTable}>
            <option value='1'>Название</option>
            <option value='2'>Количество</option>
            <option value='3'>Расстояние</option>
        </select>
        </div>
    );
};

export default SelectTable;