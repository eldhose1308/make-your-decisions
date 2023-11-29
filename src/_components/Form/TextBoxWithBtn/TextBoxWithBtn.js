import React from "react";

import TextBox from "_components/Form/TextBox/TextBox";
import Button from "_components/Form/Button/Button";

const TextBoxWithBtn = (props) => {

    return (
        <React.Fragment>
            <div style={{display: 'flex'}}>
                <TextBox />
                <Button text=">" />
            </div>
        </React.Fragment>
    )
}

export default TextBoxWithBtn;