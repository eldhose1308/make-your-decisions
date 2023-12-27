import React from "react";

import Item from "../Item/Item";
import { Button } from "_components/Form";

import './Column.css'

export default function Columns(props){
    const { id, items, text, onReOrder, onItemAdd, onItemEdit } = props;
    const itemsArr = Object.values(items)
    const itemsLength = itemsArr.length;

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
            <div className="d-flex">
                <p className="board-columns-heading">{text} <span> ( {itemsLength})</span> </p>
                <span className="board-column-actions">&#8942;</span>
            </div>

            <div>
                {itemsArr.map(item => {
                    const { id: key } = item;
                    return (<Item key={`${id}_${key}`} id={id} data={item} onClick={handleItemEdit} />)
                })}
            </div>

            <Button text="Add" customClass="btn-outline-muted" onClick={handleItemAdd} />
        </div>
    )
}