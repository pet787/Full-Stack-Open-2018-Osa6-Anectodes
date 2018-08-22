import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  handleSubmit = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    this.props.createAnecdote( content )
    this.props.notify( 'You added anecdote \'' + content + '\'', 5 )
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
  { createAnecdote, notify }
)(AnecdoteForm)
