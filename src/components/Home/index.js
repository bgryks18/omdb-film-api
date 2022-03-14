import React from 'react'
import Style from './style/style.module.css'
import Results from '../Results'
const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
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
            <form onSubmit={handleSubmit}>
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
          <Results />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Home)
