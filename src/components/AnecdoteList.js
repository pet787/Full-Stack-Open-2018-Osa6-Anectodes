import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {

  showNotification = ( message ) => {
    this.props.store.dispatch( setNotification( message ) )
    setTimeout(() => {
      this.props.store.dispatch( clearNotification() )
    }, 5000)
  }

  handleVote = (anecdote) => (e) => {
    e.preventDefault()
    this.props.store.dispatch( voteAnecdote( anecdote.id) )
    this.showNotification( 'You voted anecdote \'' + anecdote.content + '\'')
  }

  render() {
    const { anecdotes } = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map( anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={ this.handleVote( anecdote ) }
              >
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
