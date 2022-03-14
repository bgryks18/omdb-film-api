import ax from 'axios'

const API_KEY = '3c78c5ff'
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&`

export const searchMovies = (keyword) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING' })
  try {
    const res = await ax.get(`${url}s=${keyword}`)
    dispatch({
      type: 'SEARCH',
      payload: {
        list: res.data.Search,
        totalResults: res.data.totalResults,
        keyword,
      },
    })
  } catch (error) {
    console.log('Bir hata oluştu', error)
  }
}
export const clear = () => (dispatch) => {
  dispatch({ type: 'CLEAR' })
}
