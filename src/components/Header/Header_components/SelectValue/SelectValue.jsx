import React from 'react';

const SelectValue = (props) => {

    const SelectTableValue=(e)=>{
        props.SelectTableValue(e)
    }

    return (
        <div>
        <select onChange={SelectTableValue}>
            <option  value='1'>Равно</option>
            <option value='2'>Содержит</option>
            <option disabled={props.TableNumber>1?false:true} value='3'>Больше</option>
            <option disabled={props.TableNumber>1?false:true} value='4'>Меньше</option>
        </select>
        </div>
    );
};

export default SelectValue;