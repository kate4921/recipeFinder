import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPecipesByCuisine } from '../store/actionsRecipes'
// import { selectRecipes } from '../store/recipeSelectors'
import TemtlateRecipes from '../components/templateRecipes/TemtlateRecipes'
import Loading from '../components/loading/Loading'

function Cuisine() {
  let params = useParams()

  const recipes = useSelector((state) => state.recipes.recipes) //selectRecipes//
  const dispatch = useDispatch()

  const loading = useSelector((state) => state.recipes.loading)

  useEffect(() => {
    // console.log(params.type)
    dispatch(fetchPecipesByCuisine(params.type))
  }, [params.type, dispatch])

  return <>{loading ? <Loading /> : <TemtlateRecipes items={recipes} />}</>
}

export default Cuisine
