import React, { useEffect, useState } from 'react'
import Style from './style/style.module.css'
import { useSelector } from 'react-redux'
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
    <div className={`${Style.movieSearchResults}`}>
      <h4>Results for "{states.keyword}"</h4>
      <p>top on a movie title to learn more about it</p>
      <div className={`${Style.movieResultListGroup}`}>
        {moviesToShow.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <a href="">{movie.Title}</a>
            </div>
          )
        })}
      </div>
      {states.movies.length > maxNum && (
        <>
          <hr></hr>
          <small>{states.movies.length - maxNum} sonuç daha</small>
          <p>
            <a href="#">Tümünü gör</a>
          </p>
        </>
      )}
    </div>
  )
}

export default React.memo(Results)
