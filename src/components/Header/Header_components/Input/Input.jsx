import React from 'react';

const Input = (props) => {

    const onChangeHandler=(e)=>{
        props.onChangeHandler(e)
    }

    return (
        <div>
            <input placeholder={'Значение'} onChange={onChangeHandler} value={props.value} type='text'/>
        </div>
    );
};

export default Input;