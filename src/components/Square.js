import React from 'react';

export default ({value, onClick}) =>{
    const style = value ? "squares " + value : "squares"
    return (<button className={style} onClick={onClick}>
        {value}
    </button>)
    }