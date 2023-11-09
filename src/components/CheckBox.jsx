import React, { useState } from 'react';

const CheckBox = function({ onChange, text, hide, lock }){

    const [check, setCheck] = useState(false);

    const changeCheckbox = (event) => {
        setCheck(event.target.checked);
        onChange(event.target.checked);
        console.log(text);
    };

    // const handlerChange = (event) => {
    //     onChange(event);
    // };

    return (
            <table align="center">
            <tbody>
                <tr>
                <td  width={500}>{text}</td>
                <td><input type="checkbox" checked={lock?true:check} onChange={changeCheckbox}></input></td>
            </tr>
            </tbody>
            </table>
    );
}

export default CheckBox;

// const CheckBox = function ({text, hide}) {
//     const [check, setCheck] = useState(false);

//     function changeCheckbox({target : {checked}}){
//         console.log(check, checked);
//         setCheck(checked);
//     }

//     if (!hide) {
//     return (
            
//             <table align="center">
//             <tbody>
//                 <tr>
//                 <td  width={500}>{text}</td>
//                 <td><input type="checkbox" checked={check} onChange={changeCheckbox}></input></td>
//             </tr>
//             </tbody>
//             </table>

//     )}
//     else return (<></>)
// }

// export default CheckBox;