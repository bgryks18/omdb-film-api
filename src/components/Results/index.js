import React from 'react'
import Style from './style/style.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Results = () => {
  const states = useSelector((state) => state.MovieState)
  let maxNum = 4
  let moviesToShow = []
  if (states.movies.length > maxNum) {
    moviesToShow = states.movies.slice(0, maxNum)
  } else {
    moviesToShow = states.movies
  }
  return (
    <>
      {states.movies.length > 0 ? (
        <div className={`${Style.movieSearchResults}`}>
          <h4>Results for "{states.keyword}"</h4>
          <p>top on a movie title to learn more about it</p>
          <div className={`${Style.movieResultListGroup}`}>
            {moviesToShow.map((movie) => {
              return (
                <div key={movie.imdbID}>
                  <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                </div>
              )
            })}
          </div>
          {states.movies.length > maxNum && (
            <>
              <hr></hr>
              <small>{states.movies.length - maxNum} more results</small>
              <p>
                <Link to={`/search/${states.keyword}`}>View all</Link>
              </p>
            </>
          )}
        </div>
      ) : (
        'No result'
      )}
    </>
  )
}

export default React.memo(Results)
