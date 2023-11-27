import React from "react";

import Cards from "../Cards/Cards";

import './CardsGroup.css'

const CardsGroup = (props) => {

    const { optionsList, onHeadingSubmit, onSubmit } = props;

    const handleHeadingSubmit = (id, value) => {
        onHeadingSubmit && onHeadingSubmit(id, value)
    }

    const handleCardSubmit = (value) => {
        onSubmit && onSubmit(value)
    }

    return (
        <main className="card-group">
            {optionsList.map(option => {
                const { heading, headingId, options } = option;
                return (<Cards heading={heading} headingId={headingId} options={options} onHeadingSubmit={handleHeadingSubmit} onSubmit={handleCardSubmit} />)
            })}
            
           
            
        </main>
    )

}

export default CardsGroup;