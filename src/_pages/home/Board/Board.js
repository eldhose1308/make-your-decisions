import React, { useState } from "react";

import EditableHeading from "_components/Misc/EditableHeading/EditableHeading";
import CardsGroup from "_components/Misc/CardsGroup/CardsGroup";

import useOffCanvas from "_hooks/useOffCanvas";

import './Board.css'

import EditOptionForm from "./_components/EditOptionsForm/EditOptionsForm";
import OffCanvas from "_components/UI/OffCanvas/OffCanvas";
import Columns from "./_components/Column/Columns";


const optionsObj = {
  1: {
    optionId: 1,
    optionName: 'React JS',
    optionItems: {
      11: {
        id: 11,
        value: ' JavaScript and JSX '
      },
      12: {
        id: 12,
        value: 'Relatively easier'
      },
      13: {
        id: 13,
        value: 'Virtual DOM   '
      },
      14: {
        id: 14,
        value: 'Component-based'
      },
      15: {
        id: 15,
        value: 'One-way (top-down)'
      },
      16: {
        id: 16,
        value: 'Lightweight and faster'
      },
    }
  },
  2: {
    optionId: 2,
    optionName: 'Angular JS',
    optionItems: {
      21: {
        id: 21,
        value: 'TypeScript and HTML '
      },
      22: {
        id: 22,
        value: 'Steeper'
      },
      23: {
        id: 23,
        value: 'Real DOM'
      },
      24: {
        id: 24,
        value: 'Full MVC'
      },
      25: {
        id: 25,
        value: 'Two-way (bidirectional)'
      },
      26: {
        id: 26,
        value: 'Heavier and slower '
      },
    }
  },
  3: {
    optionId: 3,
    optionName: 'Vue JS',
    optionItems: {
      31: {
        id: 31,
        value: 'JavaScript'
      },
      32: {
        id: 32,
        value: 'Relatively easier'
      },
      33: {
        id: 33,
        value: 'Virtual DOM '
      },
      34: {
        id: 34,
        value: 'Component-based '
      },
      35: {
        id: 35,
        value: 'Two-way (bidirectional)'
      },
      36: {
        id: 36,
        value: 'Lightweight and performs wel'
      },
    }
  }
}

const Board = () => {
  const [headingName, setHeadingName] = useState("What technology to study for front-end developement ?");
  const [options, setOptions] = useState(optionsObj) // make a reducer for this

  const [optionEditing, setOptionEditing] = useState(0)

  const { showOffCanvas, hideOffCanvas, isOffcanvasShown } = useOffCanvas()

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
    showOffCanvas()
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
    showOffCanvas()
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
      <div className="content-heading">
      <EditableHeading heading={headingName} onSubmit={handleoptionNameChange} />
      </div>

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
          <OffCanvas isActive={isOffcanvasShown} onClose={hideOffCanvas} >
            <EditOptionForm optionObj={optionEditing} focus={false} onSubmit={handleOptionSubmit} />
          </OffCanvas>
        ) : null
      }


    </React.Fragment>
  )

}

export default Board;