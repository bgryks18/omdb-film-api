import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Style from './style/style.module.css'
import PageNotFound from '../PageNotFound'
const Movies = () => {
  const { keyword } = useParams()
  const navigate = useNavigate()
  const states = useSelector((state) => state.MovieState)
  if (states.movies.length < 1) return <PageNotFound />
  if (states.keyword !== keyword) return <PageNotFound />
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <div className={`container-fluid`}>
      <div className={`${Style.movieSearchContainer}`}>
        <div className={`${Style.movieSearchArea}`}>
          <button className="btn toBack m-1" onClick={handleClick}>
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <div className={`${Style.movieSearchHeader}`}>
            <p>
              All results about "<b>{keyword}</b>"
            </p>
            <div className={`row ${Style.listRow}`}>
              {states.movies.map((movie) => {
                return (
                  <div className="col-md-6" key={movie.imdbID}>
                    <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies
