import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TemtlateRecipes from '../../components/templateRecipes/TemplateRecipes'
import {
  removeAllFavoriteRecipes,
  setFavoriteRecipes,
} from '../../store/recipesReducer'
import './favorites.css'

function FavoriteRecipe() {
  const favorites = useSelector((state) => state.recipes.favoriteRecipes)
  const dispatch = useDispatch()

  const handleRemoveAll = () => {
    dispatch(removeAllFavoriteRecipes())
  }

  useEffect(() => {
    const check = localStorage.getItem('favorites')
    if (check) {
      dispatch(setFavoriteRecipes(JSON.parse(check)))
    }
  }, [dispatch])

  return (
    <div className="favRecipe">
      {favorites.length > 0 ? (
        <>
          <button className="removeAllFav" onClick={handleRemoveAll}>
            Remove all
          </button>
          <TemtlateRecipes items={favorites} />
        </>
      ) : (
        <p>There are no recipes</p>
      )}
    </div>
  )
}

export default FavoriteRecipe
