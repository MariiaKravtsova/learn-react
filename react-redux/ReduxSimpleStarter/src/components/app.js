import React, { Component } from 'react'
import SearchBar from './search-bar'
import YTSearch from 'youtube-api-search'
import { API_KEY } from '../../config'

export default class App extends Component {


  getVideos = () => YTSearch({key: API_KEY, term: 'cats'}, (data) => console.log(data))

  render() {
    return (
      <div>
      <SearchBar />
        React simple starter</div>
    );
  }
}
