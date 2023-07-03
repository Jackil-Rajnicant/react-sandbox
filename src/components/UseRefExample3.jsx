import React, { useState } from 'react'
import Todo from './Todo'

export default function UseRefExample3() {

    const [showToDo, setShowToDo] = useState(true)

  return (
    <div>
        {showToDo && <Todo />}
        <button className='btn btn-primary' onClick={() => setShowToDo(!showToDo)}>Toggle Todo</button>
    </div>
  )
}
