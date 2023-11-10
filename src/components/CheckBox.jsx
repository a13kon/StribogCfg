import React from 'react';

const CheckBox = function({ onChange, text, hide, lock }){

    const changeCheckbox = (event) => {
        onChange(event.target.checked);
    };

    return (
            <table align="center" hidden={hide}>
            <tbody>
                <tr>
                <td width={500}>{text}
                </td>
                <td>
                    <input type="checkbox" 
                    checked={lock} 
                    onChange={changeCheckbox}>
                    </input>
                </td>
            </tr>
            </tbody>
            </table>
    );
}

export default CheckBox;
