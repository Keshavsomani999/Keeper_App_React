import React from 'react'




export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div>
        <footer>
            Copyright © {currentYear}
        </footer>
    </div>
  )
}
