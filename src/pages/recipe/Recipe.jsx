import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { RxCross1 } from 'react-icons/rx'
import './recipe.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectedRecipe } from '../../store/actionsRecipes'
import Heart from '../../components/Heart'

function Recipe() {
  const params = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('instractions')

  const details = useSelector((state) => state.recipes.selectedRecipe)
  const dispatch = useDispatch()

  const goBack = () => navigate(-1)

  const ingredients = []
  const measures = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = details[`strIngredient${i}`]
    const measure = details[`strMeasure${i}`]

    if (ingredient) {
      ingredients.push(ingredient)
    }
    if (measure) {
      measures.push(measure)
    }
  }

  useEffect(() => {
    dispatch(fetchSelectedRecipe(params.id))
  }, [params.id, dispatch])

  return (
    <div className="recipeWrapper">
      <div className="svg-nav">
        <RxCross1 onClick={goBack} />
        <Heart item={details} color="#272727" size={25} />
      </div>
      <div className='detailWrapper'>
      <div className="title-info">
        <h2>{details.strMeal}</h2>
        <img src={details.strMealThumb} alt={details.strMeal} />
      </div>
      <div className="info">
        <button
          className={activeTab === 'instractions' ? 'active' : ''}
          onClick={() => setActiveTab('instractions')}
        >
          Instructions
        </button>
        <button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </button>
        {activeTab === 'instractions' && (
          <div className="instractions">
            <p>{details.strInstructions}</p>
            <a href={details.strSource} target="blank">
              Original Source
            </a>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <div className="ingredients">
            <div>
              {ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
            </div>
            <div>
              {measures.map((measure, index) => (
                <p key={index}>{measure}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default Recipe
