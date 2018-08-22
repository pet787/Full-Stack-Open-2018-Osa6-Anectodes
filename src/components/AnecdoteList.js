import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

class AnecdoteList extends React.Component {

  showNotification = ( message ) => {
    this.props.setNotification( message )
    setTimeout(() => {
      this.props.clearNotification()
    }, 5000)
  }

  handleVote = (anecdote) => (e) => {
    e.preventDefault()
    this.props.voteAnecdote( anecdote.id)
    this.showNotification( 'You voted anecdote \'' + anecdote.content + '\'')
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        { this.props.filteredAnecdotes
          .map( anecdote =>
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

const giveFilteredAnecdotes = (anecdotes, filter) => {
  return anecdotes
    .filter(anecdote => anecdote.content.search( filter ) >= 0 )
    .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    filteredAnecdotes: giveFilteredAnecdotes(state.anecdotes, state.anecdoteFilter )
  }
}

export default connect(
  mapStateToProps,
  { voteAnecdote, setNotification, clearNotification }
)(AnecdoteList)
