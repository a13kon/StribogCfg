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
const [stateC08, setC08] = useState('Вода');
const [stateC09, setC09] = useState('Линейное');
const [stateC10, setC10] = useState('1');
const [stateC11, setC11] = useState(false);
const [stateC12, setC12] = useState(false);
const [stateC13, setC13] = useState(false);
const [stateC14, setC14] = useState(false);
const [stateC15, setC15] = useState('Аналоговое');
const [stateC16, setC16] = useState(false);
const [stateC17, setC17] = useState(false);
const [stateC18, setC18] = useState(false);
const [stateC19, setC19] = useState(false);
const [stateC20, setC20] = useState(false);
const [stateC21, setC21] = useState(false);
const [stateC22, setC22] = useState(false);



const handleChangeC01 = (stateC01) => {
  setC01(stateC01);
};
const handleChangeC02 = (stateC02) => {
  setC02(stateC02);
};
const handleChangeC03 = (stateC03) => {
  setC03(stateC03);
  if ((Number(stateC03) < 2) && (stateC15 === 'Адиабатическое')) setC15('Дискретное');
  if (Number(stateC03) > 0 && (stateC04 === 'Вода' || stateC08 === 'Вода')) setC18(true);
  if (Number(stateC03) > 1 && stateC07 === 'Дополнительный') setC20(true);
};
const handleChangeC04 = (stateC04) => {
  setC04(stateC04);
  if ((stateC04 === 'Электро') && (stateC08 === "Вода")) setC08('Электро');
  if (Number(stateC03) > 0 && (stateC04 === 'Вода' || stateC08 === 'Вода')) setC18(true);
};
const handleChangeC05 = (stateC05) => {
  setC05(stateC05);
  if (stateC05 === 'Двоичное' && Number(stateC06) > 3) setC06('3');
};
const handleChangeC06 = (stateC06) => {
  setC06(stateC06);
};
const handleChangeC07 = (stateC07) => {
  setC07(stateC07);
  if (stateC07 !== 'Дополнительный' && stateC15 === 'Адиабатическое') setC15('Дискретное');
  if (stateC07 === 'Дополнительный') setC20(true);
};
const handleChangeC08 = (stateC08) => {
  setC08(stateC08);
  if (Number(stateC03) > 0 && ((stateC04 === 'Вода') || (stateC08 === 'Вода'))) setC18(true);
};
const handleChangeC09 = (stateC09) => {
  setC09(stateC09);
  if ((stateC09 === 'Двоичное') && (Number(stateC10) > 3)) setC10('3');
};
const handleChangeC10 = (stateC10) => {
  setC10(stateC10);
};
const handleChangeC11 = (stateC11) => {
  setC11(stateC11);
  if (stateC11) setC19(true);
};
const handleChangeC12 = (stateC12) => {
  setC12(stateC12);
  if (stateC12) setC19(true);
};
const handleChangeC13 = (stateC13) => {
  setC13(stateC13);
  if (stateC13) setC21(true);
};
const handleChangeC14 = (stateC14) => {
  setC14(stateC14);
  if (stateC14) setC21(true);
};
const handleChangeC15 = (stateC15) => {
  setC15(stateC15);
};
const handleChangeC16 = (stateC16) => {
  setC16(stateC16);
};
const handleChangeC17 = (stateC17) => {
  setC17(stateC17);
};
const handleChangeC18 = (stateC18) => {
  if (!((stateC04 === 'Вода' && Number(stateC03) > 0 ) || (stateC08 === 'Вода' && Number(stateC03) > 1))) setC18(stateC18);
};
const handleChangeC19 = (stateC19) => {
  if (!(stateC11 || stateC12)) setC19(stateC19);
};
const handleChangeC20 = (stateC20) => {
  if (!((stateC07 === 'Дополнительный' && Number(stateC03) > 1) || (stateC14 === 'Адиабатическое' && stateC14))) setC20(stateC20);
};
const handleChangeC21 = (stateC21) => {
  if (!(stateC13 || stateC14)) setC21(stateC21);
};
const handleChangeC22 = (stateC22) => {
  setC22(stateC22);
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

        <List
          onChange={handleChangeC08}
          text='C08 Тип второго нагревателя'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={stateC04 === 'Электро'? ['Электро']:['Вода', 'Электро']} 
          value={stateC08}
          hide={(Number(stateC03) < 2)}>
        </List>

        <List
          onChange={handleChangeC09}
          text='C09 Тип управления второго нагревателя'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={['Линейное', 'Двоичное']} 
          value={stateC09}
          hide={(Number(stateC03) < 2) || stateC08 ==='Вода'}>
        </List>
        
        <List
          onChange={handleChangeC10}
          text='C10 Количество ступеней второго нагревателя'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={stateC09 === 'Линейное'? ['1', '2', '3', '4', '5', '6', '7', '8'] : ['1', '2', '3']} 
          value={(stateC09 === 'Двоичное') && (Number(stateC10) > 3) ? '3' : stateC10}
          hide={(Number(stateC03) < 2) || stateC08 ==='Вода'}>
        </List>

        <h2 className='menu'>-= ОХЛАДИТЕЛИ =-</h2>

        <CheckBox
          onChange={handleChangeC11}
          text='С11 Использовать компрессорно-конденсаторный блок'
          mainClass='option'
          textClass='left'
          checkClass='right'>
        </CheckBox>

        <CheckBox
          onChange={handleChangeC12}
          text='С12 Использовать чиллер'
          mainClass='option'
          textClass='left'
          checkClass='right'>
        </CheckBox>

        <h2 className='menu'>-= ОСУШЕНИЕ =-</h2>

        <CheckBox
          onChange={handleChangeC13}
          text='С13 Управление осушением'
          mainClass='option'
          textClass='left'
          checkClass='right'>
        </CheckBox>

        <CheckBox
          onChange={handleChangeC14}
          text='С14 Управление увлажнителем'
          mainClass='option'
          textClass='left'
          checkClass='right'>
        </CheckBox>

        <List
          onChange={handleChangeC15}
          text='C15 тип увлажнителя'
          mainClass='option'
          textDivClass='left'
          listDivClass='right'
          listClass='list'
          options={((Number(stateC03) < 2) || (stateC07 !== 'Дополнительный'))? ['Аналоговое', 'Дискретное'] : ['Аналоговое', 'Дискретное', 'Адиабатическое']} 
          value={stateC15}
          hide={!stateC14}>
        </List>

        <h2 className='menu'>-= УТИЛИЗАЦИЯ =-</h2>

        <CheckBox
          onChange={handleChangeC16}
          text='С16 Управление рециркуляцией'
          mainClass='option'
          textClass='left'
          checkClass='right'>
        </CheckBox>

        <CheckBox
          onChange={handleChangeC17}
          text='С17 Управление роторным рекуператором'
          mainClass='option'
          textClass='left'
          checkClass='right'>
        </CheckBox>

        <h2 className='menu'>-= ДАТЧИКИ =-</h2>

        <CheckBox
          onChange={handleChangeC18}
          text='С18 Использовать наружный датчик температуры'
          mainClass='option'
          textClass='left'
          checkClass='right'
          lock={stateC18}>
        </CheckBox>

        <CheckBox
          onChange={handleChangeC19}
          text='С19 Использовать вытяжной датчик температуры'
          mainClass='option'
          textClass='left'
          checkClass='right'
          lock={stateC19}>
        </CheckBox>

        <CheckBox
          onChange={handleChangeC20}
          text='С20 Использовать доп. датчик температуры'
          mainClass='option'
          textClass='left'
          checkClass='right'
          lock={stateC20}>
        </CheckBox>

        <CheckBox
          onChange={handleChangeC21}
          text='С21 Использовать вытяжной датчик влажности'
          mainClass='option'
          textClass='left'
          checkClass='right'
          lock={stateC21}>
        </CheckBox>

        <CheckBox
          onChange={handleChangeC22}
          text='С22 Использовать вытяжной датчик влажности'
          mainClass='option'
          textClass='left'
          checkClass='right'>
        </CheckBox>


        <button onClick={() => console.log( stateC01, 
                                            stateC02, 
                                            stateC03, 
                                            stateC04, 
                                            stateC05, 
                                            stateC06, 
                                            stateC07, 
                                            stateC08, 
                                            stateC09, 
                                            stateC10, 
                                            stateC11, 
                                            stateC12,
                                            stateC13,
                                            stateC14,
                                            stateC15,
                                            stateC16,
                                            stateC17,
                                            stateC18,
                                            stateC19,
                                            stateC20,
                                            stateC21,
                                            stateC22
          )}>Log</button>
      </div>
    </div>
  );
}

export default App;


