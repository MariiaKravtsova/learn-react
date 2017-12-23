import React, { Component } from 'react'
import SearchBar from './search-bar'
import YTSearch from 'youtube-api-search'
import VideoList from './video-list'
import VideoDetail from './video-detail'
import { API_KEY } from '../../config'
import { debounce } from 'lodash'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       videos: [],
       selectedVideo: null
    }

    this.videoSearch('cats')
  }
  
  videoSearch = (term) => YTSearch({key: API_KEY, term}, (videos) => this.setState({ videos, selectedVideo: videos[0] }))

  
  render() {
    const videoSearch = debounce(term => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTerm={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}
