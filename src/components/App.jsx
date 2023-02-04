import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from '../notes'
import Login from './Login'
import Form from './Form'

var isUserRegistered = true

const time = new Date(2019,11,1,18).getHours();

export default function App() {

  return (
    <div>
      <Header />

      {isUserRegistered ? <Login /> : <Form /> }

      {/* {time > 12 ? <h1> why still working</h1> : null} */}

      {/* <div className='allCard'>


          {notes.map(note =>
            <Note key={note.key} title={note.title} content={note.content} />
          )}


      </div> */}
      <Footer />
    </div>
  )
}
