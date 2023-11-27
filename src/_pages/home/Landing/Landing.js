import React, { useState } from "react";

import EditableHeading from "_components/Misc/EditableHeading/EditableHeading";
import CardsGroup from "_components/Misc/CardsGroup/CardsGroup";

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
        id: 1,
        value: 'Anything'
    }, {
        id: 2,
        value: 'What thing'
    }]
}]

const Landing = () => {
    const [heading, setHeading] = useState('This is the Heading');
    const [options, setOptions] = useState(optionsObj)

    const handleCardsHeadingSubmit = (id, value) => {
       const tempOption = [...options];
       const newOptions = tempOption.map(option => {
        if(option.headingId === id)
            return {...option, heading: value}
        return option
        })

       setOptions(newOptions)
    }

    const handleCardsGroupSubmit = (value) => {
        setOptions(value)
    }

    const handleHeadingChange = (value, e) => {
        setHeading(value)
    }

    return (
        <React.Fragment>
            <EditableHeading heading={heading} onSubmit={handleHeadingChange} />
            <CardsGroup optionsList={options} onHeadingSubmit={handleCardsHeadingSubmit} onSubmit={handleCardsGroupSubmit} />
        </React.Fragment>
    )

}

export default Landing;