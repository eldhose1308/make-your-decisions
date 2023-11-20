import React from "react";
import './Alerts.css';

const Alerts = (props) => {
    const { mode='alert', value } = props;
    const { type = 'error', message='' } = value;
    return (
        <div className={`${mode} ${mode}-${type}`}>
            {/* <h5>Uh-Oh!</h5> */}
            {message}
        </div>
    )
}

export default Alerts;