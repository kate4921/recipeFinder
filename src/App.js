import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ErrorPage from './pages/errorPage/error-page'
import Layout from './pages/layout/Layout'
import StartPage from './pages/startPage/StartPage'
import Home from './pages/Home'
import FavoriteRecipe from './pages/favorites/FavoriteRecipe'
import Contact from './pages/contacts/Contact'
import Recipes from './pages/Recipes'
import Cuisine from './pages/Cuisine'
import Searched from './pages/Searched'
import Recipe from './pages/recipe/Recipe'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/recipes/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/recipes/',
        element: <Home />,
        children: [
          {
            path: '/recipes/',
            element: <Recipes />,
          },
          {
            path: '/recipes/cuisine/:type',
            element: <Cuisine />,
          },
          {
            path: '/recipes/searched/:search',
            element: <Searched />,
          },
          {
            path: '/recipes/searched/',
            element: <Searched />,
          },
          {
            path: '/recipes/recipe/:id',
            element: <Recipe />,
          },
        ],
      },
      {
        path: 'favorites',
        element: <FavoriteRecipe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
