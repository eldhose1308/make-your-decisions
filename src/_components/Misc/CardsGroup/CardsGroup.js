import React from "react";

import Cards from "../Cards/Cards";

import './CardsGroup.css'

const CardsGroup = (props) => {

    const { optionsList, onHeadingSubmit, onOptionsEdit, onOptionsEditClose, onOptionItemAdd, onOptionAdd, onSubmit } = props;

    const handleHeadingSubmit = (id, value) => {
        onHeadingSubmit && onHeadingSubmit(id, value)
    }

    const handleOptionsEdit = (option, optionId, headingId, value) => {
        onOptionsEdit && onOptionsEdit(option, optionId, headingId, value)
    }

    const handleOptionsEditClose = () => {
        onOptionsEditClose && onOptionsEditClose();
    }
  
    const handleOptionItemAdd = (headingId) => {
        onOptionItemAdd && onOptionItemAdd(headingId);
    }


    const handleOptionAdd = () => {
        onOptionAdd && onOptionAdd();
    }

    return (
        <main className="card-group">
            {Object.values(optionsList).map(option => {
                const { optionName, optionId, optionItems } = option;
                return (
                    <React.Fragment>
                        <Cards heading={optionName} headingId={optionId} options={optionItems} onHeadingSubmit={handleHeadingSubmit} onOptionsEdit={handleOptionsEdit} onOptionsEditClose={handleOptionsEditClose} onOptionItemAdd={handleOptionItemAdd} />
                        {/* <div className="resize-card"></div> */}
                    </React.Fragment>
                )
            })}
            <Cards onOptionAdd={handleOptionAdd} />

           
            
        </main>
    )

}

export default CardsGroup;