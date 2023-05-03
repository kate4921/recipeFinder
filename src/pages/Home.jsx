import React from 'react'
import { Outlet } from 'react-router'
import Areas from '../components/areas/Areas'
import Search from '../components/search/Search'

function Home() {
  return (
    <>
      <Search/>
      <Areas/>
      <Outlet/>
    </>
  )
}

export default Home
