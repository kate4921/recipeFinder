import React from 'react'
import {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} from '../store/recipesReducer'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillHeart, AiOutlineHeart/*,AiOutlinePlus, AiOutlineMinus*/ } from 'react-icons/ai'

function Heart({ item, color = 'f1f1f1', size = 30 }) {
  const favorites = useSelector((state) => state.recipes.favoriteRecipes)

  const dispatch = useDispatch()

  const handleAdd = () => {
      dispatch(addFavoriteRecipe(item))
  }

  const handleRemove = () => {
    dispatch(removeFavoriteRecipe(item.idMeal))
  }
  return (
    <div className="heart">
      {!favorites.map((r) => r.idMeal).includes(item.idMeal) && (
        <AiOutlineHeart color={color} size={size} onClick={handleAdd} />
      )}
      {favorites.map((r) => r.idMeal).includes(item.idMeal) && (
        <AiFillHeart color={color} size={size} onClick={handleRemove} />
      )}
    </div>
  )
}

export default Heart
