import React from 'react'
import { useEffect } from 'react'
import '@splidejs/react-splide/css'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchBreakfast,
  fetchDessert,
  fetchMiscellaneous,
  fetchSeafood,
  fetchVegetarian,
} from '../store/actionsRecipes'
import TemplateRecipesSlide from '../components/templateRecipesSlide/TemplateRecipesSlide'

function Recipes() {
  const breakfast = useSelector((state) => state.recipes.breakfast)
  const miscellaneous = useSelector((state) => state.recipes.miscellaneous)
  const dessert = useSelector((state) => state.recipes.dessert)
  const seafood = useSelector((state) => state.recipes.seafood)
  const vegetarian = useSelector((state) => state.recipes.vegetarian)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBreakfast())
    dispatch(fetchDessert())
    dispatch(fetchMiscellaneous())
    dispatch(fetchSeafood())
    dispatch(fetchVegetarian())
  }, [dispatch])

  return (
    <>
      <TemplateRecipesSlide title="Miscellaneous" recipes={miscellaneous} />
      <TemplateRecipesSlide title="Vegetarian" recipes={vegetarian} />
      <TemplateRecipesSlide title="Seafood" recipes={seafood} />
      <TemplateRecipesSlide title="Breakfast" recipes={breakfast} />
      <TemplateRecipesSlide title="Dessert" recipes={dessert} />
    </>
  )
}

export default Recipes
