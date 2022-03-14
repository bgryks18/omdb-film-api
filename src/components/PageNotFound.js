import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="errorBox">
      <div className="alert alert-danger" role="alert">
        <h2>404 error</h2>
        <p>Page not found</p>
        {<Link to="/">go home page</Link>}
      </div>
    </div>
  )
}

export default PageNotFound
