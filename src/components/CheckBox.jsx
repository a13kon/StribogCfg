import React from 'react';

const CheckBox = function({ onChange, text, hide, lock, mainClass, textClass, checkClass }){

    const changeCheckbox = (event) => {
        onChange(event.target.checked);
    };

    if (!hide) {
    return (   
        <div className={mainClass} hidden={hide}>
            <div className={textClass}>
                {text}
            </div>
            <div className={checkClass}>
                <input type="checkbox" 
                checked={lock} 
                onChange={changeCheckbox}>
                </input>
            </div>
        </div>

    );
    } else {
        return(<></>)
    }
}

export default CheckBox;

/* <table align="center" hidden={hide}>
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
</table> */
