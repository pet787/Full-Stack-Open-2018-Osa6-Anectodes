const initialState = ''

const filterReducer = (store = initialState, action) => {
  switch (action.type) {
  case 'SETFILTER': return action.filter
  case 'CLEARFILTER': return ''
  default: return store
  }
}

export const setFilter = ( filter ) => {
  return {
    type: 'SETFILTER',
    filter: filter
  }
}

export const clearFilter = ( ) => {
  return {
    type: 'CLEARFILTER'
  }
}

export default filterReducer