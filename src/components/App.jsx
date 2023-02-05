import React,{ useState ,useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from '../notes'
import Login from './Login'
import Form from './Form'
import cars from './practice'



export default function App() {


const [headingText, setHeadingText] = useState("Hello");


const [useStyle,setStyle] = useState("black");


function handleClick(){

  setHeadingText("Submited")
}



function handleMouseOver(){
  setStyle("red")
  
}
function handleMouseOut(){
  document.body.style.backgroundColor="red"
  setStyle("black")

}

  return (
    <div>
      <Header />


    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:useStyle}}  onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} onClick={handleClick}>Submit</button>
      {/* <button style={{backgroundColor: isMouseOver ? "black" : "white"}} onClick={handleClick}>Submit</button> */}
    </div>

      <Footer />
    </div>
  )
}
