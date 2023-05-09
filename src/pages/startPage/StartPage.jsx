import React from 'react'
import { Link } from 'react-router-dom'
import './startPage.css'

function StartPage() {
  return (
    <div className="bg">
      <div className="startPage">
        <div className="titleWrapper ">
          <h1>deliciousss</h1>
          <h2>Find your recipe</h2>
        </div>

        <Link className="startButtom scale-up-center1" to="/recipes/">
          <button className="buttonStart">Start</button>
        </Link>
      </div>
    </div>
  )
}

export default StartPage
