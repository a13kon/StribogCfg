import React, {useState} from 'react';
import CheckBox from './components/CheckBox';
import List from './components/List';
import './css/style.css';

function App() {

const [stateC01, setC01] = useState(false);
const [stateC02, setC02] = useState(false);
const [stateC03, setC03] = useState('0');
const [stateC04, setC04] = useState('Вода');
const [stateC05, setC05] = useState('Линейное');
const [stateC06, setC06] = useState('1');
const [stateC07, setC07] = useState('Основной');


const handleChangeC01 = (stateC01) => {
  setC01(stateC01);
};
const handleChangeC02 = (stateC02) => {
  setC02(stateC02);
};
const handleChangeC03 = (stateC03) => {
  setC03(stateC03);
};
const handleChangeC04 = (stateC04) => {
  setC04(stateC04);
};
const handleChangeC05 = (stateC05) => {
  setC05(stateC05);
  if ((stateC05 === 'Двоичное') && (Number(stateC06) > 3))   setC06('3');
};
const handleChangeC06 = (stateC06) => {
  setC06(stateC06);
};
const handleChangeC07 = (stateC07) => {
  setC07(stateC07);
};


  return (
    <div className='main'>
      <div className="background"> 

        <h2 className='menu'>-= ВЕНТИЛЯТОРЫ =-</h2>

        <CheckBox
          onChange={handleChangeC01}
          text='С01 Использовать вытяжной вентилятор'
          mainClass='option'
          textClass='left'
          checkClass='right'>
        </CheckBox>

        <CheckBox
          onChange={handleChangeC02}
          text='С02 Использовать датчик перепада давления'
          mainClass='option'
          textClass='left'
          checkClass='right'>
        </CheckBox>

        <h2 className='menu'>-= НАГРЕВАТЕЛИ =-</h2>

        <List
          onChange={handleChangeC03}
          text='C03 Количество нагревателей'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={[0, 1, 2]} 
          value={stateC03}>
        </List>

        <List
          onChange={handleChangeC04}
          text='C04 Количество нагревателей'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={['Вода', 'Электро']} 
          value={stateC04}
          hide={Number(stateC03) < 1}>
        </List>

        <List
          onChange={handleChangeC05}
          text='C05 Тип управления первого нагревателя'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={['Линейное', 'Двоичное']} 
          value={stateC05}
          hide={(Number(stateC03) < 1) || stateC04 ==='Вода'}>
        </List>

        <List
          onChange={handleChangeC06}
          text='C06 Количество ступеней первого нагревателя'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={stateC05 === 'Линейное'? ['1', '2', '3', '4', '5', '6', '7', '8'] : ['1', '2', '3']} 
          value={(stateC05 === 'Двоичное') && (Number(stateC06) > 3) ? '3' : stateC06}
          hide={(Number(stateC03) < 1) || stateC04 ==='Вода'}>
        </List>

        <List
          onChange={handleChangeC07}
          text='C07 Режим работы второго нагревателя'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={['Основной', 'Дополнительный']} 
          value={stateC07}
          hide={(Number(stateC03) < 2)}>
        </List>

        <button onClick={() => console.log(stateC01, stateC02, stateC03, stateC04, stateC05, stateC06, stateC07)}>Log</button>
      </div>
    </div>
  );
}

export default App;




// const handleChangeC01 = (c01checked) => {
//   setC01(c01checked)
//   if (!chk2) setChk2(c01checked)
//   if (value1 > 1) setValue1('1')
//   }

// const handleChangeC02 = (chk2) => {
//   if (!c01checked) setChk2(chk2)
// }

// const handleChangeList1 = (value1) => {
//   if (value1 > 1 && c01checked) setValue1('1')
//   else setValue1(value1)
// }


// const [c01checked, setC01] = useState(false)
// const [chk2, setChk2] = useState(false)
// const [value1, setValue1] = useState(0)



// <CheckBox 
// onChange={handleChangeC01} 
// text='C01 Использовать вытяжной вентилятор'
// mainClass='option'
// textClass='left'
// checkClass='right'
// />
// <CheckBox 
// onChange={handleChangeC02} 
// text='C02 Использовать датчик перепада давления' 
// mainClass='option'
// textClass='left'
// checkClass='right'
// lock={c01checked || chk2}
// />
// <h2 className='menu'>-= НАГРЕВАТЕЛИ =-</h2>

// <List 
// onChange={handleChangeList1}
// text='C03 Количество нагревателей'
// mainClass='option'
// textDivClass='left'
// listDivClass='right'
// listClass='list'
// options={c01checked? [0, 1]:[0, 1, 2, 3, 4, 5]} //здесь только отображение. Условия дублируются как и в логике
// value={value1 > 1 && c01checked? '0':value1}
// hide={c01checked}
// />
// <CheckBox 
// onChange={handleChangeC02} 
// text='C04 Использовать датчик перепада давления' 
// mainClass='option'
// textClass='left'
// checkClass='right'
// lock={c01checked || chk2}
// />
