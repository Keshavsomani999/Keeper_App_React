import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import Card from './Card'
// import contacts from '../contact'
import emojis from '../contact'


// var numbers = [3,56,2,48,5];

// map
// const a = numbers.map(function (x){
//   return x*2;
// });
// console.log(a)


//filter

// const a= numbers.filter(function (num){
//   return num>10
// })

// console.log(a)


// reduce

// const a = numbers.reduce(function (acc,curr){
//   console.log("acc = " + acc)
//   console.log("curr = " +curr)
//   return acc+curr;
// })
// console.log(a)


// first item greater than 10
// const a= numbers.find(num =>{
//   return num>10
// })
// console.log(a)


// function createCard(emoji){
//   return <Card 
//   key ={emoji.id}
//   name={emoji.name} 
//   img = {emoji.imgURL}
//   tel = {emoji.meaning}
//   email = {emoji.code}
//   />
// }

export default function App() {

  return (
    <div>
      <Header />

      <div className='allCard'>
      <Note />

      {emojis.map(emoji => (
        <Card 
        key ={emoji.id} 
        name={emoji.name} 
        img = {emoji.imgURL} 
        tel = {emoji.meaning} 
        email = {emoji.code} 
        />
      ))}

      </div>
      <Footer />
    </div>
  )
}
