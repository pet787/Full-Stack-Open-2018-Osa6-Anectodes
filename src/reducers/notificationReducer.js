const initialState = 'Application started'

const notificationReducer = (store = initialState, action) => {
  switch (action.type) {
  case 'SET': return action.note
  case 'CLEAR': return ''
  default: return store
  }
}

export const notify = ( message, timeout ) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET',
      note: message
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR',
      })
    }, timeout * 1000 )
  }
}

export default notificationReducer