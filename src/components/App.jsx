import React,{ useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from '../notes'
import Login from './Login'
import Form from './Form'
import cars from './practice'


const [honda,tesla] = cars

const {speedStats:{topSpeed:hondaTopSpeed}} = honda
const {speedStats:{topSpeed:teslaTopSpeed}} = tesla

const {coloursByPopularity:[hondaTopColour]} = honda
const {coloursByPopularity:[teslaTopColour]} = tesla

export default function App() {

  setInterval(inc,1000)

  let getTime = new Date().toLocaleTimeString();

  const [time,setCount] = useState(getTime);

  function inc(){
    let newTime = new Date().toLocaleTimeString();

    setCount(newTime);
  }


  return (
    <div>
      <Header />

    <h1>{time}</h1>
    <button onClick={inc}>Get Time</button>
    {/* <button onClick={dec}>-</button> */}

    <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>

     

      {/* <div className='allCard'>


          {notes.map(note =>
            <Note key={note.key} title={note.title} content={note.content} />
          )}


      </div> */}
      <Footer />
    </div>
  )
}
