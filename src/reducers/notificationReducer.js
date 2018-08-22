const initialState = 'Application started'

const notificationReducer = (store = initialState, action) => {
  switch (action.type) {
  case 'SET': return action.note
  case 'CLEAR': return ''
  default: return store
  }
}

export const setNotification = ( message ) => {
  return {
    type: 'SET',
    note: message
  }
}

export const clearNotification = ( ) => {
  return {
    type: 'CLEAR'
  }
}

export default notificationReducer