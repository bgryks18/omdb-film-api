import React from 'react'
import Style from './style/style.module.css'
const Results = () => {
  return (
    <div className={`${Style.movieSearchResults}`}>
      <h4>Results for "search"</h4>
      <p>top on a movie title to learn more about it</p>
      <div className={`${Style.movieResultListGroup}`}>
        <ul className={`${Style.movieResultList}`}>
          <li>
            <a href="#">Movie 1</a>
          </li>
          <li>
            <a href="#">Movie 1</a>
          </li>
          <li>
            <a href="#">Movie 1</a>
          </li>
        </ul>
        <ul className={`${Style.movieResultList}`}>
          <li>
            <a href="#">Movie 1</a>
          </li>
          <li>
            <a href="#">Movie 1</a>
          </li>
          <li>
            <a href="#">Movie 1</a>
          </li>
        </ul>
        <ul className={`${Style.movieResultList}`}>
          <li>
            <a href="#">Movie 1</a>
          </li>
          <li>
            <a href="#">Movie 1</a>
          </li>
          <li>
            <a href="#">Movie 1</a>
          </li>
        </ul>
        <ul className={`${Style.movieResultList}`}>
          <li>
            <a href="#">Movie 1</a>
          </li>
          <li>
            <a href="#">Movie 1</a>
          </li>
          <li>
            <a href="#">Movie 1</a>
          </li>
        </ul>
      </div>
      <hr></hr>
      <small>12 sonuç daha</small>
      <p>
        <a href="#">Tümünü gör</a>
      </p>
    </div>
  )
}

export default React.memo(Results)
