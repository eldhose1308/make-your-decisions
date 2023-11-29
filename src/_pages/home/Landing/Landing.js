import React, { useState } from "react";

import EditableHeading from "_components/Misc/EditableHeading/EditableHeading";
import CardsGroup from "_components/Misc/CardsGroup/CardsGroup";

import { useOffCanvas } from "_contexts/PortalsProvider";

import './Landing.css'

import EditOptionForm from "./EditOpionsForm";
import OffCanvas from "_components/UI/OffCanvas/OffCanvas";
import { TextBox } from "_components/Form";
import TextBoxWithBtn from "_components/Form/TextBoxWithBtn/TextBoxWithBtn";


const optionsObj = [{
    headingId: 1,
    heading: 'Option 1',
    options: [{
        id: 1,
        value: 'Nothing'
    }, {
        id: 2,
        value: 'Something'
    }]
}, {
    headingId: 2,
    heading: 'Option 2',
    options: [{
        id: 3,
        value: 'Anything'
    }, {
        id: 4,
        value: 'What thing'
    }]
}]

const Landing = () => {
    const [heading, setHeading] = useState('This is the Heading');
    const [options, setOptions] = useState(optionsObj) // make a reducer for this

    const [ optionEditing, setOptionEditing ] = useState(0)

    const handleHeadingSubmit = (id, value) => {
       const newOptions = options.map(option =>  (option.headingId === id) ? {...option, heading: value} : option ) 
       setOptions(newOptions)
    }

    const handleOptionSubmit = (updatedOptionObj = {}) => {
        const updatedOptions = options.map(optionItems => {
            return {
                ...optionItems,
                options: optionItems.options.map(option => {
                return option.id === updatedOptionObj.id ? { ...option, ...updatedOptionObj } : option
            })
        }
        })

        setOptions(updatedOptions)
        setOptionEditing(null)
    }

    const handleOptionsEdit = (option, id, value) => {
        setOptionEditing(option)
    }

    const handleHeadingChange = (value, e) => {
        setHeading(value)
    }

    const handleOptionsEditClose = () => {
        setOptionEditing(null)
    }

    return (
        <React.Fragment>
            <EditableHeading heading={heading} onSubmit={handleHeadingChange} />
            <CardsGroup optionsList={options} onHeadingSubmit={handleHeadingSubmit} onOptionsEdit={handleOptionsEdit} onOptionsEditClose={handleOptionsEditClose} />
            
            <TextBoxWithBtn />

            {optionEditing ? 
                ( <OffCanvas isOffcanvasShown>
                    <EditOptionForm optionObj={optionEditing} onSubmit={handleOptionSubmit} />
                </OffCanvas>
                ) : null 
            }

            
        </React.Fragment>
    )

}

export default Landing;