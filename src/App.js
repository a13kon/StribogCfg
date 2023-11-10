import React, {useState} from 'react';
import CheckBox from './components/CheckBox';
import List from './components/List';


function App() {
  const [chk1, setChk1] = useState(false)
  const [chk2, setChk2] = useState(false)
  const [value1, setValue1] = useState(0)

  const handleChange1 = (chk1) => {
    setChk1(chk1)
    if (!chk2) setChk2(chk1)
    if (value1 > 1) setValue1('1')
    }

  const handleChange2 = (chk2) => {
    if (!chk1) setChk2(chk2)
  }

  const handleChangeList1 = (value1) => {
    if (value1 > 1 && chk1) setValue1('1')
    else setValue1(value1)
  }


  return (
    <>
      <h1 align="center">-= ВЕНТИЛЯТОРЫ =-</h1>
      <CheckBox 
        onChange={handleChange1} 
        text='C01 Использовать вытяжной вентилятор'
      />
      <CheckBox 
        onChange={handleChange2} 
        text='C02 Использовать датчик перепада давления' 
        lock={chk1 || chk2}
      />
      <h1 align="center">-= НАГРЕВАТЕЛИ =-</h1>
      <List 
        onChange={handleChangeList1}
        text='C03 Количество нагревателей'
        options={chk1? [0, 1]:[0, 1, 2, 3, 4, 5]}
        value={value1 > 1 && chk1? '1':value1}
      />
      <CheckBox 
        onChange={handleChange2} 
        text='C02 Использовать датчик перепада давления' 
        lock={chk1 || chk2}
      />
      <button onClick={() => console.log(chk1, chk2, value1)}>Log</button>
    </>
  );
}

export default App;
