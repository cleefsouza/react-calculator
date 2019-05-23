import React, { Component } from 'react';

import './style.css';

export default props =>
    <button onClick={e => props.click && props.click(props.label)}
    className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}
    >
        {props.label}
    </button>