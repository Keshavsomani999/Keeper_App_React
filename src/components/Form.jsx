import React from 'react'

export default function Form() {
  return (
    <div>
        <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
    </div>
  )
}
