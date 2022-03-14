import React from 'react'
import Style from './style/style.module.css'
const index = () => {
  console.log(Style)
  return (
    <div className={`container-fluid`}>
      <div className={`${Style.movieSearchContainer}`}>
        <div className={`${Style.movieSearchArea}`}>
          <div className={`${Style.movieSearchHeader}`}>
            <h1>OMDb API</h1>
            <p>
              The Open Movie Database <i className="fa-solid fa-film"></i>
            </p>
          </div>
          <div className={`${Style.movieSearchForm}`}>
            <form>
              <div className={`form-group ${Style.searchQuery}`}>
                <label htmlFor="searchQuery">
                  <b>Movie Title</b>
                </label>
                <div>
                  <i className="fa fa-search"></i>
                  <input
                    type="text"
                    className="form-control"
                    id="searchQuery"
                  />
                </div>
              </div>
              <div className={`${Style.buttons}`}>
                <button type="button" className={`btn ${Style.formClear}`}>
                  Clear
                </button>
                <button type="submit" className={`btn ${Style.formSubmit}`}>
                  Search
                </button>
              </div>
            </form>
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default React.memo(index)
