import React from 'react';
import "./styles.css"

function Wrapper(props) {
    return (
        <h1 className = "wrapper container-fluid">
            {props.children}
        </h1>
    );
}

export default Wrapper;
