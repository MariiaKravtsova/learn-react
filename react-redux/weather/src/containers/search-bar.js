import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispathToProps)(SearchBar)