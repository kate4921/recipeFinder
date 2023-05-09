import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import Card from '../Card'
import '@splidejs/react-splide/css'
import './recipesslide.css'

function TemplateRecipesSlide({ title, recipes }) {
  const options = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    breakpoints: {
      1500: {
        perPage: 2,
      },
      550: {
        perPage: 1,
      },
    },
  }

  return (
    <div className="recipesSlideWrapper">
      <h3>{title}</h3>
      <Splide className="my-carousel" options={options}>
        {recipes.map((recipe) => {
          return (
            <SplideSlide key={recipe.idMeal}>
              <Card item={recipe} />
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}

export default TemplateRecipesSlide
