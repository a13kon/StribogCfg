import React, {useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import CheckBox from './components/CheckBox';
import { VideoList } from './components/VideoList';

function App() {
  return (
    <>
      <h1 align="center">-= ВЕНТИЛЯТОРЫ =-</h1>
      <CheckBox text ={'C01 Использовать вытяжной вентилятор'}  />
      <CheckBox text ={'C02 Использовать датчик перепада давления'} />
      <h1 align="center">-= НАГРЕВАТЕЛИ =-</h1>
      <CheckBox text ={'C03 Количество нагревателей'} />
      <CheckBox text ={'C04 тип первого нагревателя'} />
          </>
  );
}

export default App;
