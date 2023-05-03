import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
      <p>
        <NavLink
          to="/recipes/"
          end={true}
          className={({ isActive }) => (isActive ? 'link-active menu-link' : 'menu-link')}
        >
          Recipes
        </NavLink>
      </p>

      <p>
        <NavLink
          to="/recipes/favorites"
          end={true}
          className={({ isActive }) => (isActive ? 'link-active menu-link' : 'menu-link')}
        >
          Favorites
        </NavLink>
      </p>

      <p>
        <NavLink
          to="/recipes/contact"
          end={true}
          className={({ isActive }) => (isActive ? 'link-active menu-link' : 'menu-link')}
        >
          Contacts
        </NavLink>
      </p>
    </>
  )
}

export default Menu
