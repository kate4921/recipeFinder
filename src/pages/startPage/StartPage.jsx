import React from 'react'
import { useNavigate } from 'react-router-dom'
import './startPage.css'

function StartPage() {

  const navigate = useNavigate()

  const goRecipes = () => navigate('/recipes/')

  return (
    <div className="bg">
      <div className="startPage">
        <div className="titleWrapper ">
          <h1>deliciousss</h1>
          <h2>Find your recipe</h2>
        </div>
        <button className="buttonStart scale-up-center1" onClick={goRecipes}>Start</button>
      </div>
    </div>
  )
}

export default StartPage
