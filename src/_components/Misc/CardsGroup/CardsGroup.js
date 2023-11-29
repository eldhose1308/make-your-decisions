import React from "react";

import Cards from "../Cards/Cards";

import './CardsGroup.css'

const CardsGroup = (props) => {

    const { optionsList, onHeadingSubmit, onOptionsEdit, onOptionsEditClose, onSubmit } = props;

    const handleHeadingSubmit = (id, value) => {
        onHeadingSubmit && onHeadingSubmit(id, value)
    }

    const handleOptionsEdit = (option, id, value) => {
        onOptionsEdit && onOptionsEdit(option, id, value)
    }

    const handleOptionsEditClose = () => {
        onOptionsEditClose && onOptionsEditClose();
    }
  

    return (
        <main className="card-group">
            {optionsList.map(option => {
                const { heading, headingId, options } = option;
                return (
                    <React.Fragment>
                        <Cards heading={heading} headingId={headingId} options={options} onHeadingSubmit={handleHeadingSubmit} onOptionsEdit={handleOptionsEdit} onOptionsEditClose={handleOptionsEditClose} />
                        {/* <div className="resize-card"></div> */}
                    </React.Fragment>
                )
            })}
            
           
            
        </main>
    )

}

export default CardsGroup;