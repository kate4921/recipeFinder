import { Link, useRouteError } from 'react-router-dom'
import './errorpage.css'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <div>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link className='errorlink' to='/recipes'>Go back to choosing recipes</Link>
      </div>
    </div>
  )
}
