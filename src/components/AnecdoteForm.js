import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  showNotification = ( message ) => {
    this.props.setNotification( message )
    setTimeout(() => {
      this.props.clearNotification()
    }, 5000)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    this.props.createAnecdote( content)

    event.target.anecdote.value = ''
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

export default connect(
  null,
  { createAnecdote, setNotification, clearNotification }
)(AnecdoteForm)
