import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const {name}= useSelector(state => state)
  const dispatch = useDispatch()

  const changeName=()=>{
    dispatch({type:"add",data:'ali'})
  }
  return (
    <div>
      check
      {name}

      <button onClick={changeName}> click</button>
    </div>
  )
}

export default App
