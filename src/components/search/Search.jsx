import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import './search.css'

function Search() {
  const [input, setInpyt] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('searched/' + input.trim())
    setInpyt('')
  }

  return (

      <form className="searchForm" onSubmit={submitHandler}>
        <div className="innerform">
          <FaSearch />
          <input
            type="text"
            value={input}
            onChange={(e) => setInpyt(e.target.value)}
          />
        </div>
      </form>

  )
}

export default Search
