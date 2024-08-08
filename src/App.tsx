import React, { useEffect, useState } from 'react'

import './App.css'
import { Button } from './components/Button';
import { Input } from './components/Input';
import { todoItems } from './types/utilities';
import { Items } from './components/Items';

const App = () => {

  const [items, setItems] = useState<todoItems[]>(localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')!) : [])
  const [inpValue , setInpValue] = useState<string>('')

  //  Store Todo 

  useEffect(() => {

    localStorage.setItem('todo' , JSON.stringify(items))

  } , [items])

  return (

    <div className="h-screen flex justify-center items-center bg-amber-200">

      <div className="papper" draggable="true">

        <h1 className="text-center text-3xl font-semibold pt-6">TODO 📃</h1>

        <div className="text-center mt-10 flex items-center">

          <Input type='text' inpValue={inpValue} setInpValue={setInpValue} />

          <Button className={'ml-8 bg-blue-500 text-white rounded'} inpValue={inpValue} setInpValue={setInpValue} items={items} setItems={setItems}/>
          
        </div>

        <Items items={items} setItems={setItems} />

      </div>
    </div>
  );
}

export default App
