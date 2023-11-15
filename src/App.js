import React, {useState} from 'react';
import CheckBox from './components/CheckBox';
import List from './components/List';
import './css/style.css';


function App() {
  const [chk1, setChk1] = useState(false)
  const [chk2, setChk2] = useState(false)
  const [value1, setValue1] = useState(0)


  //здесь логика. Записывается в переменные
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
    <div className='main'>
      <div className="background"> 
        <h2 className='menu'>-= ВЕНТИЛЯТОРЫ =-</h2>
        <CheckBox 
          onChange={handleChange1} 
          text='C01 Использовать вытяжной вентилятор'
          mainClass='option'
          textClass='left'
          checkClass='right'
        />
        <CheckBox 
          onChange={handleChange2} 
          text='C02 Использовать датчик перепада давления' 
          mainClass='option'
          textClass='left'
          checkClass='right'
          lock={chk1 || chk2}
        />
        <h2 className='menu'>-= НАГРЕВАТЕЛИ =-</h2>
        <List 
          onChange={handleChangeList1}
          text='C03 Количество нагревателей'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={chk1? [0, 1]:[0, 1, 2, 3, 4, 5]} //здесь только отображение. Условия дублируются как и в логике
          value={value1 > 1 && chk1? '0':value1}
          hide={chk1}
        />
        <CheckBox 
          onChange={handleChange2} 
          text='C04 Использовать датчик перепада давления' 
          mainClass='option'
          textClass='left'
          checkClass='right'
          lock={chk1 || chk2}
        />
        <button onClick={() => console.log(chk1, chk2, value1)}>Log</button>
      </div>
    </div>
  );
}

export default App;
