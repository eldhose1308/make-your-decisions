import React from "react";

import './Cards.css'
import EditableHeading from "../EditableHeading/EditableHeading";
import CardsItem from "../CardsItem/CardsItem";

const Cards = (props) => {
    const { heading, headingId, options, onHeadingSubmit, onOptionsEdit, onOptionsEditClose, onSubmit } = props;

    const handleEditableHeadingSubmit = (value) => {
        onHeadingSubmit && onHeadingSubmit(headingId, value)
    }

    const handleOptionsEdit = (option, id, value) => {
        onOptionsEdit && onOptionsEdit(option, id, value)
    } 

    const handleOptionsEditClose = () => {
        onOptionsEditClose && onOptionsEditClose()
    }

    return (
        <React.Fragment>
            <div className="card board">
                
                <div className="card-header">
                    <EditableHeading onSubmit={handleEditableHeadingSubmit} heading={heading} />
                </div>

                <div className="card-body">
                   {options.map(option => (
                    <CardsItem option={option} onEdit={handleOptionsEdit} onEditClose={handleOptionsEditClose} />
            
                   ))}
                </div>

                <div className="card-footer">

                </div>
            </div>

        </React.Fragment>
    )
}

export default Cards;