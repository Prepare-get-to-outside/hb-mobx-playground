import { autorun } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import store from './store';

const App: React.FC = observer(() => {
  const { countClass, countObject, count, doubleClass } = store;

  autorun(() => {
    if(doubleClass.double){
      console.log("Double : " + doubleClass.double);
      // doubleClass.double;
    }
    if (doubleClass.double === 8) {
      console.log('만약 value가 8이라면 0으로 초기화')
      doubleClass.value = 0
    }
  });

  return (
    <div style={{padding: '50px'}} >
    <div style={{marginBottom: '50px'}}>
      <h1> Count (Class) </h1>
      <div>number : {count.number}</div>
      <button onClick={() => count.increase()}>plus</button>
      <button onClick={() => count.decrease()}>minus</button>
    </div>

  
      <div style={{marginBottom: '50px'}}>
        <h1> Count (Class Auto) </h1>
        <div>number : {countClass.number}</div>
        <button onClick={() => countClass.increase()}>plus</button>
        <button onClick={() => countClass.decrease()}>minus</button>
      </div>
      
      <div style={{marginBottom: '50px'}}>
        <h1> Count (Object) </h1>
        <div>number : {countObject.num1}</div>
        <button onClick={() => countObject.increase()}>plus</button>
        <button onClick={() => countObject.decrease()}>minus</button>
      </div>


      <div style={{marginBottom: '50px'}}>
        <h1> Double (Object) </h1>
        <div>number : {doubleClass.value}</div>
        <button onClick={() => doubleClass.increment()}>increment</button>
      </div>
    </div>
  );
})

export default App;
