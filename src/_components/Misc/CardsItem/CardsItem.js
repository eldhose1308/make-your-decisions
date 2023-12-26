import React from "react";

import './CardsItem.css'

const CardsItem = (props) => {
    const { option = {}, onEdit, onEditClose } = props;
    const { id, value,  } = option;

    const handleClick = (e) => {
        e.stopPropagation();

        const { detail } = e;
        if(detail >= 2){
            onEdit && onEdit(option, id, value)
        }else{
            onEditClose && onEditClose()
        }
    }

    return (
        <div className="board-item" onClick={handleClick}>
            <span>{value}</span>
            {/* <span className="">edit</span> */}
        </div>
    )
}

export default CardsItem;