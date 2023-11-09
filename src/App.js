import React, {useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import CheckBox from './components/CheckBox';
import { VideoList } from './components/VideoList';

function App() {
  const [chk1, setChk1] = useState(false)
  const [chk2, setChk2] = useState(false)
  const [chk3, setChk3] = useState(false)

  const handleChange1 = (chk1) => {
    setChk1(chk1)
    setChk2(chk1)
  }

  const handleChange2 = (chk2) => {
    if (!chk1) setChk2(chk2)
  }

  const handleChange3 = (chk3) => {
    setChk3(chk3)
  }

  return (
    <>
      <CheckBox onChange={handleChange1} text='C01 Использовать вытяжной вентилятор'/>
      <CheckBox onChange={handleChange2} text='C02 Использовать вытяжной вентилятор' lock={chk1}/>
      <CheckBox onChange={handleChange3} text='C03 Использовать вытяжной вентилятор'/>
      <button onClick={() => console.log(chk1, chk2, chk3)}>Log</button>
      {/* <h1 align="center">-= ВЕНТИЛЯТОРЫ =-</h1>
      <CheckBox text ={'C01 Использовать вытяжной вентилятор'}  />
      <CheckBox text ={'C02 Использовать датчик перепада давления'} />
      <h1 align="center">-= НАГРЕВАТЕЛИ =-</h1>
      <CheckBox text ={'C03 Количество нагревателей'} />
      <CheckBox text ={'C04 тип первого нагревателя'} /> */}
    </>
  );
}

export default App;
