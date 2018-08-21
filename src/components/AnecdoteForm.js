import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  showNotification = ( message ) => {
    this.props.store.dispatch( setNotification( message ) )
    setTimeout(() => {
      this.props.store.dispatch( clearNotification() )
    }, 5000)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.store.dispatch( createAnecdote( content) )

    e.target.anecdote.value = ''
    this.showNotification( 'You added anecdote \'' + content + '\'' )
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default AnecdoteForm
