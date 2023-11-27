import React from "react";

import './Cards.css'
import EditableHeading from "../EditableHeading/EditableHeading";

const Cards = (props) => {
    const { heading, headingId, options, onHeadingSubmit, onSubmit } = props;

    const handleEditableHeadingSubmit = (value) => {
        onHeadingSubmit && onHeadingSubmit(headingId, value)
    }

    return (
        <React.Fragment>
            <div className="card board">
                
                <div className="card-header">
                    <EditableHeading onSubmit={handleEditableHeadingSubmit} heading={heading} />
                </div>

                <div className="card-body">
                   {options.map(option => {
                    const { id, value } = option;

                    return (
                        <div className="board-item">
                            {value}
                        </div>
                    )
                   })}
                </div>

                <div className="card-footer">

                </div>
            </div>
        </React.Fragment>
    )
}

export default Cards;