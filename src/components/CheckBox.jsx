import React, { useState } from 'react';



const CheckBox = function ({text, hide}) {
    const [check, setCheck] = useState(false);

    function changeCheckbox({target : {checked}}){
        console.log(check, checked);
        setCheck(checked);
    }

    if (!hide) {
    return (
            
            <table align="center">
            <tbody>
                <tr>
                <td  width={500}>{text}</td>
                <td><input type="checkbox" checked={check} onChange={changeCheckbox}></input></td>
            </tr>
            </tbody>
            </table>

    )}
    else return (<></>)
}

export default CheckBox;