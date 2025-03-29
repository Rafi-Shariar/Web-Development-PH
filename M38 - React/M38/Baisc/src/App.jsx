import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singer from './singer'
function App() {

  const actors = ['Bappa Raj', 'Omar Sanny', 'Salman Shah'];

  const singers = [
    {id:1, name:'Dr.Mahfuz', age:68},
    {id:2, name:'Tahsan', age:58},
    {id:3, name:'Zohad', age:48},
  ]

  return(
    <>
      <h1>React Core Concepts</h1>
     
    
      {/* <Person></Person>
      <Student></Student>
      <Developer name="XXX" tech="Js"></Developer>
      <Developer name="ZZZ" tech="CPP"></Developer>
      <Player name="tamim" runs='5000'></Player> */}

       {/* <Todo task="learn React" isDone={true}></Todo>
      <Todo task="Revise Js" isDone={false}></Todo> */}
      
      {/* 
      {
        actors.map(actor => <Actor name ={actor}></Actor>)
      } */}

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


    </>
  )
}
 
//My Components
function Person(){
  const name = `Rafi Shariar`;

  const personStyle = {
    color: 'red'
  }


  return(
    <div>
      <h3 style={personStyle}>My Name is "{name}"</h3>
    </div>
  )
}


function Student(){
  return(
    <div className='student'>
      <p >Name:</p>
      <p>Dept:</p>
    </div>
  )
}

function Developer(props){

  return(
    <div style={{
      border: '2px solid green',
      margin:'10px'
    }}>
      <h3>Developer Info {props.name} , Language : {props.tech}</h3>
    </div>
  )
}

function Player({name,runs}){
  return(
    <div style={{
      border: '2px solid red',
      margin:'10px',
      borderRadius: '12px'
     }}>
      <p>Name: {name}</p>
      <p>Run: {runs}</p>
    </div>
  )
}


export default App
