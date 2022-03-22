import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovie } from '../../actions/MovieActions'
import Style from './style/style.module.css'
import PageNotFound from '../PageNotFound'
const Movie = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const states = useSelector((state) => state.MovieState)
  if (!states.movies.find((movie) => movie.imdbID === id)) {
    return <PageNotFound /> //eğer arama sonucunda bu sayfaya ulaşmadıysa direkt hata alsın
  }
  useEffect(() => {
    dispatch(getMovie(id))
  }, [])
  const handleClick = () => {
    navigate(-1)
  }
  const movie = states.movie
  if (states.movieLoading === false) {
    return (
      <div className={`container-fluid`}>
        <div className={`${Style.movieSearchContainer}`}>
          <div className={`${Style.movieSearchArea}`}>
            <button className="btn toBack m-1" onClick={handleClick}>
              <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <div className={`${Style.movieSearchHeader}`}>
              {movie.Poster !== 'N/A' && (
                <figure className="figure">
                  <img
                    src={`${movie.Poster}`}
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                  <figcaption className="figure-caption">
                    {movie.Year} - {movie.Genre}
                  </figcaption>
                </figure>
              )}
              <div>
                <h1>{movie.Title}</h1>
                <p>
                  {movie.Writer !== 'N/A' && <>Writen by {movie.Writer}</>}
                  {movie.Actors !== 'N/A' && (
                    <>
                      <br />
                      {movie.Actors}
                      <br />
                    </>
                  )}
                  IMDB Rating: {movie.imdbRating}
                </p>
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
  return (
    <div className="loading center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Movie
