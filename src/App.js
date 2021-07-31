import React from 'react'
import Foodrecipe from './components/foodrecipe/Foodrecipe'
import Todolist from './components/todolist/Todolist'

const App = () => {
  return (
    <div>
      <Todolist/>
      <br/>
      <Foodrecipe/>
      <div style={{width:"50%",height:"1000px"}}>

      </div>
    </div>
  )
}

export default App
