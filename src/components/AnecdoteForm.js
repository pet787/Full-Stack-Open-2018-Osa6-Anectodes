import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  showNotification = ( message ) => {
    this.props.setNotification( message )
    setTimeout(() => {
      this.props.clearNotification()
    }, 5000)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.createAnecdote( newAnecdote )
    this.showNotification( 'You added anecdote \'' + content + '\'' )
    console.log(this.props.anecdotes)
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
