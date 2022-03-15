let initState = {
  loading: null,
  movies: [],
  totalResults: 0,
  keyword: '',
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'CLEAR':
      return initState
    case 'SET_LOADING':
      return { ...state, loading: true }
    case 'SET_UNLOADING':
      return { ...state, loading: false }
    case 'SEARCH':
      return {
        ...state,
        movies: action.payload.list,
        totalResults: action.payload.totalResults,
        keyword: action.payload.keyword,
        loading: false,
      }
    default:
      return state
  }
}
