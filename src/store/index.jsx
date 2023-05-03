import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './recipesReducer'

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
})

export default store