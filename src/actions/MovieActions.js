import ax from 'axios'

const API_KEY = '3c78c5ff'
const url = `https://www.omdbapi.com/?apikey=${API_KEY}&`

export const searchMovies = (keyword) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING' })
  try {
    const res = await ax.get(`${url}s=${keyword}`)
    if (res.data.Response !== 'False') {
      dispatch({
        type: 'SEARCH',
        payload: {
          list: res.data.Search,
          totalResults: res.data.totalResults,
          keyword,
        },
      })
    } else {
      dispatch({ type: 'SET_UNLOADING' })
    }
  } catch (error) {
    console.log('Bir hata oluştu', error)
  }
}
export const getMovie = (imdbID) => async (dispatch) => {
  dispatch({ type: 'SET_MOVIE_LOADING' })
  try {
    const res = await ax.get(`${url}i=${imdbID}`)
    if (res.data.Response !== 'False') {
      dispatch({
        type: 'GET_MOVIE',
        payload: res.data,
      })
    } else {
      dispatch({ type: 'SET_MOVIE_UNLOADING' })
    }
  } catch (error) {
    console.log('Bir hata oluştu', error)
  }
}
export const clear = () => (dispatch) => {
  dispatch({ type: 'CLEAR' })
}
