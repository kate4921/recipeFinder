import { createSlice } from '@reduxjs/toolkit'

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    dessert: [],
    seafood: [],
    vegetarian: [],
    miscellaneous: [],
    breakfast: [],
    selectedRecipe: {},
    favoriteRecipes: [],
    loading: false,
    error: null,
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload
      state.loading = false
    },
    setDessert: (state, action) => {
      state.dessert = action.payload
      state.loading = false
    },
    setSeafood: (state, action) => {
      state.seafood = action.payload
      state.loading = false
    },
    setVegetarian: (state, action) => {
      state.vegetarian = action.payload
      state.loading = false
    },
    setMiscellaneous: (state, action) => {
      state.miscellaneous = action.payload
      state.loading = false
    },
    setBreakfast: (state, action) => {
      state.breakfast = action.payload
      state.loading = false
    },
    setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload
      state.loading = false
    },
    setFavoriteRecipes: (state, action) => {
      state.favoriteRecipes = action.payload
      localStorage.setItem('favorites', JSON.stringify(state.favoriteRecipes))
    },
    addFavoriteRecipe: (state, action) => {
      state.favoriteRecipes.push(action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.favoriteRecipes))
    },
    removeFavoriteRecipe: (state, action) => {
      const index = state.favoriteRecipes.findIndex(
        (item) => item.idMeal === action.payload
      )
      if (index !== -1) {
        state.favoriteRecipes.splice(index, 1)
      }
      localStorage.setItem('favorites', JSON.stringify(state.favoriteRecipes))
    },
    removeAllFavoriteRecipes: (state) => {
      state.favoriteRecipes = []
      localStorage.setItem('favorites', JSON.stringify(state.favoriteRecipes))
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const {
  setRecipes,
  setDessert,
  setSeafood,
  setVegetarian,
  setMiscellaneous,
  setBreakfast,
  setSelectedRecipe,
  setFavoriteRecipes,
  addFavoriteRecipe,
  removeFavoriteRecipe,
  removeAllFavoriteRecipes,
  setLoading,
  setError,
} = recipesSlice.actions

export default recipesSlice.reducer
