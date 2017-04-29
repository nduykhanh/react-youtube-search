import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDWw0DL5Nm2eWq4tsMg915CzW1GkunVap0';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectdVideo: null
        };

        this.videoSearch('hi');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, data => {
            this.setState({
                videos: data ,
                selectedVideo: data[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {
           this.videoSearch(term)
        }, 500);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
            </div>
        );
    }
}
// <SearchBar onSearchTermChange={term=>this.videoSearch(term)} />
ReactDom.render(<App />, document.querySelector('.container'));
