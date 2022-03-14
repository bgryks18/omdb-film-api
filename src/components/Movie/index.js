import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Style from './style/style.module.css'
import PageNotFound from '../PageNotFound'
const Movie = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const states = useSelector((state) => state.MovieState)
  const movie = states.movies.find((movie) => movie.imdbID === id)
  if (!movie) return <PageNotFound />
  console.log(movie)
  const handleClick = () => {
    navigate(`/`)
  }
  return (
    <div className={`container-fluid`}>
      <div className={`${Style.movieSearchContainer}`}>
        <div className={`${Style.movieSearchArea}`}>
          <button className="btn toBack m-1" onClick={handleClick}>
            <i class="fa-solid fa-arrow-left-long"></i>
          </button>
          <div className={`${Style.movieSearchHeader}`}>
            <figure class="figure">
              <img
                src={`${movie.Poster}`}
                className="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption className="figure-caption">{movie.Year}</figcaption>
            </figure>
            <div>
              <h1>{movie.Title}</h1>
              <p>
                <a href={`https://www.imdb.com/title/${id}/`} target="_blank">
                  Visit in IMDB &nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
