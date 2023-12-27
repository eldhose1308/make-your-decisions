import React from "react";

import Item from "../Item/Item";
import { Button } from "_components/Form";

export default function Columns(props){
    const { id, items, text, onReOrder, onItemAdd, onItemEdit } = props;

    const handleOnDrop = (e) => {
       const { id: prevItemId, mainId: prevColumnId } = JSON.parse(e.dataTransfer.getData("text"))
        
       if(prevColumnId !== id){
        onReOrder && onReOrder({ prevItemId, prevColumnId, newColumnId: id,  })
       }

    }

    const handleItemAdd = (e) => {
        onItemAdd && onItemAdd(id, e)
    }

    const handleItemEdit = (data, id ,e) => {
        onItemEdit && onItemEdit(data, id ,e)
    }

    return (
        <div className="board-columns"  onDrop={handleOnDrop} onDragOver={(e) =>  e.preventDefault() } >
            <div>
            <p className="board-columns-heading">{text}</p>
            </div>

            <div>
                {Object.values(items).map(item => {
                    const { id: key } = item;
                    return (<Item key={`${id}_${key}`} id={id} data={item} onClick={handleItemEdit} />)
                })}
            </div>

            <Button text="Add" customClass="btn-muted" onClick={handleItemAdd} />
        </div>
    )
}