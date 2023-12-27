import React, { useState } from "react";

import EditableHeading from "_components/Misc/EditableHeading/EditableHeading";
import CardsGroup from "_components/Misc/CardsGroup/CardsGroup";

import { useOffCanvas } from "_contexts/PortalsProvider";

import './Board.css'

import EditOptionForm from "./EditOpionsForm";
import OffCanvas from "_components/UI/OffCanvas/OffCanvas";
import Columns from "./_components/Column/Columns";


const optionsObj = {
  1: {
    optionId: 1,
    optionName: 'Option 1',
    optionItems: {
      1: {
        id: 1,
        value: 'Nothing'
      },
      2: {
        id: 2,
        value: 'Something'
      }
    }
  },
  2: {
    optionId: 2,
    optionName: 'Option 2',
    optionItems: {
      3: {
        id: 3,
        value: 'Anything'
      },
      4: {
        id: 4,
        value: 'What thing'
      }
    }
  }
}

const Board = () => {
  const [headingName, setHeadingName] = useState('This is the heading');
  const [options, setOptions] = useState(optionsObj) // make a reducer for this

  const [optionEditing, setOptionEditing] = useState(0)

  const handleoptionNameSubmit = (id, value) => {
    const newOptions = { ...options, [id]: { ...options[id], optionName: value } }
    setOptions(newOptions)
  }

  const handleOptionSubmit = (updatedOptionObj = {}, optionId) => {
    const { id, value } = updatedOptionObj;

    const updatedOptions = {
      ...options,
      [optionId]: {
        ...options[optionId],
        'optionItems': { ...options[optionId]['optionItems'], [id]: updatedOptionObj }
      }
    }

    setOptions(updatedOptions)
    setOptionEditing(null)
  }

  const handleItemEdit = (option, optionId, e) => {
    setOptionEditing({ ...option, optionId })
  }

  const handleoptionNameChange = (value, e) => {
    setHeadingName(value)
  }

  const handleOptionsEditClose = () => {
    setOptionEditing(null)
  }

  const handleOptionItemAdd = (optionId) => {
    const latestOptionId = Date.now();
    const newOption = { id: latestOptionId, value: '' }

    setOptionEditing({ ...newOption, optionId, addMode: true })
  }

  const handleOptionAdd = () => {
    const latestOptionId = Object.values(options).length + 1;
    const newOption = {
      optionId: latestOptionId,
      optionName: 'New Option',
      optionItems: []
    }

    setOptions({ ...options, [latestOptionId]: newOption })

  }

  const handleReOrder = ({ prevItemId, prevColumnId, newColumnId }) => {
    const newOptionsObj = { ...options }
    const optionItemToMove = newOptionsObj[prevColumnId].optionItems[prevItemId];
    delete newOptionsObj[prevColumnId].optionItems[prevItemId];


    newOptionsObj[newColumnId].optionItems[prevItemId] = { ...optionItemToMove }

    setOptions(newOptionsObj);
  }

  return (
    <React.Fragment>
      <EditableHeading heading={headingName} onSubmit={handleoptionNameChange} />

      <div className="board-columns-container">
        {Object.values(options).map(optionItem => {
          const { optionId, optionItems, optionName } = optionItem;

          return (
            <Columns
              key={optionName}
              id={optionId}
              items={optionItems}
              text={optionName}
              onReOrder={handleReOrder}
              onItemAdd={handleOptionItemAdd}
              onItemEdit={handleItemEdit}
            />
          )

        })}
      </div>


      {optionEditing ?
        (
          <OffCanvas isOffcanvasShown>
            <EditOptionForm optionObj={optionEditing} focus={false} onSubmit={handleOptionSubmit} />
          </OffCanvas>
        ) : null
      }


    </React.Fragment>
  )

}

export default Board;