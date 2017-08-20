// libraries
import YTSearch from 'youtube-api-search';
import React, { Component } from 'react';

// Components
import SearchBar from './search_bar';
import VideoList from './video_list';

// constants
const API_KEY='AIzaSyB3tcTOrcL9J7Ql6i_SuySuCQUukpNnY1w';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos : []
        };

        YTSearch( { key: API_KEY, term : 'chiranjeevi'}, (data) => {
            this.setState({videos: data});
        });
    }


    render() {
    return (
      <div>React simple starter am I visible dude !! New change
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
