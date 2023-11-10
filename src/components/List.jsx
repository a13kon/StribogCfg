import React from 'react';

const List = function({onChange, text, options, value}) {

    const changelist = (event) => {
        onChange(event.target.value);
    }

    return (
        <table align='center'>
        <tbody>
            <tr>
            <td width='500px'>{text}</td>
            <td>
                <select 
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
            </td>
        </tr>
        </tbody>
        </table> 

        // <div style={{display: 'flex',  justifyContent:'center', border: 'solid'}}>
        //     <div style={{display: 'flex',  justifyContent:'left', width: '200px', border: 'solid'}}>
        //         11111
        //     </div>
        //     <div style={{display: 'flex',  justifyContent:'right', border: 'solid', width: '200px' }}>
        //         2222
        //     </div>
        // </div>
    )
}

export default List;
