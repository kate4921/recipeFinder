import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchedPecipes } from '../store/actionsRecipes'
import TemtlateRecipes from '../components/templateRecipes/TemtlateRecipes'
import Loading from '../components/loading/Loading'

function Searched() {
  let params = useParams()

  const recipes = useSelector((state) => state.recipes.recipes)
  const dispatch = useDispatch()

  const loading = useSelector((state) => state.recipes.loading)

  useEffect(() => {
    dispatch(fetchSearchedPecipes(params.search))
    // console.log(params.search)
  }, [params.search, dispatch])

  if (loading) {
    return <Loading />
  } else {
    return recipes.length > 0 ? (
      <TemtlateRecipes items={recipes} />
    ) : (
      <p className="nores">No recipes</p>
    )
  }
}

export default Searched
