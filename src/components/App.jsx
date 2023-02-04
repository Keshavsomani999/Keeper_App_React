import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import Card from './Card'
// import contacts from '../contact'
import emojis from '../contact'




function createCard(emoji){
  return <Card 
  key ={emoji.id}
  name={emoji.name} 
  img = {emoji.imgURL}
  tel = {emoji.meaning}
  email = {emoji.code}
  />
}

export default function App() {

  return (
    <div>
      <Header />

      <div className='allCard'>
      <Note />

      {emojis.map(createCard)}

      </div>
      <Footer />
    </div>
  )
}
