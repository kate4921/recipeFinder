import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks, GiCroissant } from 'react-icons/gi'
import './areas.css'

function Areas() {
  return (
    <div className="listAreas">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'styled-link-active styled-link' : 'styled-link'
        }
        to={'/recipes/cuisine/Italian'}
      >
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'styled-link-active styled-link' : 'styled-link'
        }
        to={'/recipes/cuisine/American'}
      >
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'styled-link-active styled-link' : 'styled-link'
        }
        to={'/recipes/cuisine/Japanese'}
      >
        <GiNoodles />
        <h4>Japanese</h4>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'styled-link-active styled-link' : 'styled-link'
        }
        to={'/recipes/cuisine/French'}
      >
        <GiCroissant />
        <h4>French</h4>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'styled-link-active styled-link' : 'styled-link'
        }
        to={'/recipes/cuisine/Chinese'}
      >
        <GiChopsticks />
        <h4>Chinese</h4>
      </NavLink>
    </div>
  )
}

export default Areas
