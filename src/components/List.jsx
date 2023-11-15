import React from 'react';

const List = function({onChange, text, options, value, hide, mainClass, textDivClass, listDivClass, listClass}) {

    const changelist = (event) => {
        onChange(event.target.value);
    }

    if (!hide) {
    return (
        
        <div className= {mainClass}>
            <div className= {textDivClass}>
                {text}
            </div>
            <div className= {listDivClass}>
            <select  
                className= {listClass}
                onChange={changelist}
                value={value}>
                    {
                        options.map((option, index) => {
                            return (
                                <option key={index}>{option}</option>
                            )
                        }
                    )
                    }
                </select>
            </div>
        </div>
    )
                } else {
                    return (<></>)
                }
}

export default List;
