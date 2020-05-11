import React from 'react';
import Input from './Header_components/Input/Input';
import SelectTable from './Header_components/SelectTable/SelectTable';
import SelectValue from './Header_components/SelectValue/SelectValue';

import styles from './Header.module.scss'


const Header = (props) => {
    const OnClick=()=>{
        props.Search()
    }
    return (
        <div className={styles.header}>
            <SelectTable SelectTableNumber={props.SelectTableNumber}/>
            <SelectValue TableNumber={props.TableNumber} SelectTableValue={props.SelectTableValue}/>
            <Input onChangeHandler={props.onChangeHandler} value={props.value}/>
            <button onClick={OnClick}>Ok</button>
        </div>
    );
};

export default Header;