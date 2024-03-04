import React from 'react'

export default function Navbar({nombreliker}) {
  return (
    <div className='entete'>
        <h3>Les postes liker sont: {nombreliker}</h3>
    </div>
  )
}
