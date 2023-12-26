import React from "react";

import './Cards.css'
import EditableHeading from "../EditableHeading/EditableHeading";
import CardsItem from "../CardsItem/CardsItem";
import { Button } from "_components/Form";

const Cards = (props) => {
    const { heading, headingId, options, onHeadingSubmit, onOptionsEdit, onOptionsEditClose, onOptionItemAdd, onOptionAdd, onSubmit } = props;

    const optionsData = options ? Object.values(options) : null

    const handleEditableHeadingSubmit = (value) => {
        onHeadingSubmit && onHeadingSubmit(headingId, value)
    }

    const onItemEdit = (option, id, value) => {
        onOptionsEdit && onOptionsEdit(option, id, headingId, value)
    } 

    const onItemEditClose = () => {
        onOptionsEditClose && onOptionsEditClose()
    }

    const onItemAdd = () => {
        onOptionItemAdd && onOptionItemAdd(headingId)
    }

    const handleOptionAdd = () => {
        onOptionAdd && onOptionAdd(headingId)
    }


    return (
        <React.Fragment>
            <div className="card board">
                
                <div className="card-header">
                {optionsData ? (
                    <EditableHeading onSubmit={handleEditableHeadingSubmit} heading={heading} />
                ) : (
                    <p>dsfds</p>
                )}
                </div>

                <div className="card-body">
                    {optionsData ? (
                        <React.Fragment>
                         {optionsData.map(option => (
                            <CardsItem option={option} onEdit={onItemEdit} onEditClose={onItemEditClose} />
                        ))}

                       <Button text="Add" onClick={onItemAdd} />
                       </React.Fragment>

                    ) : (
                        <Button text="Add New Option" onClick={handleOptionAdd} />
                    )}

                  
                    

                </div>

                <div className="card-footer">

                </div>
            </div>

        </React.Fragment>
    )
}

export default Cards;