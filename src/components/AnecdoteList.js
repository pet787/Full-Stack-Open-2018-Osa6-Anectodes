import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

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

  filterAnecdotes = (mask) => (anecdote) => {
    return (anecdote.content.search(mask) >= 0 )
  }

  render() {
    const { anecdotes, anecdoteFilter } = this.props
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes
          .filter(this.filterAnecdotes(anecdoteFilter))
          .sort((a, b) => b.votes - a.votes)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    anecdoteFilter: state.anecdoteFilter
  }
}

export default connect(
  mapStateToProps,
  { voteAnecdote, setNotification, clearNotification }
)(AnecdoteList)
