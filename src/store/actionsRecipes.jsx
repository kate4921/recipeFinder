import axios from 'axios'
import {
  setRecipes,
  setSelectedRecipe,
  setDessert,
  setSeafood,
  setMiscellaneous,
  setBreakfast,
  setVegetarian,
  setError,
  setLoading,
} from './recipesReducer'

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/"

export const fetchDessert = () => async (dispatch) => {

  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(
      `${BASE_URL}filter.php?c=Dessert`
    )
    if (data.meals) {
      // console.log(data.meals)
      dispatch(setDessert(data.meals))
    } else {
      dispatch(setDessert([]))
    }
  } catch (e) {
    console.log("!!!ERRROR:"+e.response)
    dispatch(setError(e.message))
  }
}

export const fetchSeafood = () => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(
      `${BASE_URL}filter.php?c=Seafood`
    )
    if (data.meals) {
      // console.log(data.meals)
      dispatch(setSeafood(data.meals))
    } else {
      dispatch(setSeafood([]))
    }
  } catch (e) {
    console.log("!!!ERRROR:"+e.response)
    dispatch(setError(e.message))
  }
}

export const fetchMiscellaneous = () => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(
      `${BASE_URL}filter.php?c=Miscellaneous`
    )
    if (data.meals) {
      // console.log(data.meals)
      dispatch(setMiscellaneous(data.meals))
    } else {
      dispatch(setMiscellaneous([]))
    }
  } catch (e) {
    console.log("!!!ERRROR:"+e.response)
    dispatch(setError(e.message))
  }
}

export const fetchVegetarian = () => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(
      `${BASE_URL}filter.php?c=Vegetarian`
    )
    if (data.meals) {
      // console.log(data.meals)
      dispatch(setVegetarian(data.meals))
    } else {
      dispatch(setVegetarian([]))
    }
  } catch (e) {
    console.log("!!!ERRROR:"+e.response)
    dispatch(setError(e.message))
  }
}

export const fetchBreakfast = () => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(
      `${BASE_URL}filter.php?c=Breakfast`
    )
    if (data.meals) {
      // console.log(data.meals)
      dispatch(setBreakfast(data.meals))
    } else {
      dispatch(setBreakfast([]))
    }
  } catch (e) {
    console.log("!!!ERRROR:"+e.response)
    dispatch(setError(e.message))
  }
}

export const fetchSearchedPecipes = (name) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(
      `${BASE_URL}search.php?s=${name}`
    )
    if (data.meals) {
      // console.log(data.meals)
      dispatch(setRecipes(data.meals))
    } else {
      dispatch(setRecipes([]))
    }
  } catch (e) {
    console.log("!!!ERRROR:"+e.response)
    dispatch(setError(e.message))
  }
}

export const fetchPecipesByCuisine = (type) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(
      `${BASE_URL}filter.php?a=${type}`
    )
    if (data.meals) {
      // console.log(data.meals)
      dispatch(setRecipes(data.meals))
    } else {
      dispatch(setRecipes([]))
    }
  } catch (e) {
    console.log("!!!ERRROR:"+e.response)
    dispatch(setError(e.message))
  }
}

export const fetchSelectedRecipe = (id) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await axios.get(
      `${BASE_URL}lookup.php?i=${id}`
    )
    if (data) {
      // console.log(data.meals)
      dispatch(setSelectedRecipe(data.meals[0]))
    }  else {
      dispatch(setSelectedRecipe({}))
    }
  } catch (e) {
    console.log("!!!ERRROR:"+e.response)
    dispatch(setError(e.message))
  }
}
