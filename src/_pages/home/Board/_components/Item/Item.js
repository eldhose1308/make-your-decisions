import React from "react";

export default function Item(props) {
    const { id: mainId, data, onClick } = props;
    const { id, value } = data;

    const handleOnDrag = (e) => {
        e.dataTransfer.setData("text", JSON.stringify({ id, mainId }));
    }

    const handleClick = (e) => {
        onClick && onClick(data, mainId ,e)
    }

    return (
        <div draggable onDragStart={handleOnDrag} onClick={handleClick} className="board-items">
            <div>
                <p>{value}</p>
            </div>

            <div>

            </div>
        </div>
    )
}