import React from 'react'
import Card from '../Card'
import './templaterecipes.css'

function TemtlateRecipes({items}) {
    return (
        <div className="gridwrapper">
          {items ? items.map((item) => (
            <div className="cardwrapper" key={item.idMeal}>
              <Card
                item = {item}
              />
            </div>
          )):<p>No recipes</p>
        }
        </div>
      )
}

export default TemtlateRecipes
