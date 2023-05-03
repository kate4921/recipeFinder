import React/*, { useState }*/ from 'react'
import { Link } from 'react-router-dom'
import Heart from './Heart'

function Card({ item }) {
  return (
    <div className="recipeCard">
      <Heart item={item} size={25} />
      <Link to={`/recipes/recipe/${item.idMeal}`}>
        <img src={item.strMealThumb} alt={item.strMeal} />
        <h4>{item.strMeal}</h4>
      </Link>
      <div className="shadow" />
    </div>
  )
}

export default Card


