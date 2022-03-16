import React, { useState } from 'react'
import Style from './style/style.module.css'
import Results from './Results'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies, clear } from '../../actions/MovieActions'
const Home = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()
  const states = useSelector((state) => state.MovieState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword.length < 3) {
      alert('Please fill the textbox as least 3 characters')
    } else {
      dispatch(clear())
      dispatch(searchMovies(keyword))
    }
    setKeyword('')
  }
  const handleClear = () => {
    setKeyword('')
    dispatch(clear())
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
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
              </div>
              <div className={`${Style.buttons}`}>
                <button
                  type="button"
                  className={`btn ${Style.formClear}`}
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button type="submit" className={`btn ${Style.formSubmit}`}>
                  Search
                </button>
              </div>
            </form>
          </div>
          {states.loading === true && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {states.loading === false && <Results />}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Home)
