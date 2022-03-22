let initState = {
  loading: null,
  movies: [],
  totalResults: 0,
  keyword: '',
  movie: null,
  movieLoading: null,
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'CLEAR':
      return initState
    case 'SET_LOADING':
      return { ...state, loading: true }
    case 'SET_UNLOADING':
      return { ...state, loading: false }
    case 'SET_MOVIE_LOADING':
      return { ...state, movieLoading: true }
    case 'SET_MOVIE_UNLOADING':
      return { ...state, movieLoading: false }
    case 'SEARCH':
      return {
        ...state,
        movies: action.payload.list,
        totalResults: action.payload.totalResults,
        keyword: action.payload.keyword,
        loading: false,
      }
    case 'GET_MOVIE':
      return {
        ...state,
        movie: action.payload,
        movieLoading: false,
      }
    default:
      return state
  }
}
