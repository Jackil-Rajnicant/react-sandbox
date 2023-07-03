import React, { useRef } from 'react'

export default function UseRefExample() {
    
    const inputRef = useRef()
    const paraRef = useRef()
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = 'hello'
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText='Goodbye'
    }


  return (
    <div>
      <form onSubmit={onSubmit}> 
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' ref={inputRef} className='form-control mb-2' />
          <button type='submit' className='btn btn-primary'>Submit</button>
          <p ref={paraRef} onClick={() => inputRef.current.focus()}>Hello Para</p>
      </form>
    </div>
  )
}
