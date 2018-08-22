import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (store =[], action) => {
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)
    return [...old, { ...voted, votes: voted.votes + 1 } ]
  }
  if (action.type === 'CREATE') {
    return [...store, action.data ]
  }
  if (action.type === 'INIT') {
    return action.data
  }
  return store
}

export const anecdotesInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    console.log('anecdotes',anecdotes)
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

export const createAnecdote = ( content ) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew( content )
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}
export const voteAnecdote = ( anecdote ) => {
  return async (dispatch) => {
    await anecdoteService.update(anecdote.id, { ...anecdote, votes: anecdote.votes + 1 } )
    dispatch({
      type: 'VOTE',
      id: anecdote.id
    })
  }
}

export default anecdoteReducer