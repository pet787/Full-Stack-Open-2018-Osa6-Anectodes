const initialState = 'default notification'

const notificationReducer = (store = initialState, action) => {
  console.log('notificationReducer: ', action)
  return store
}

export default notificationReducer