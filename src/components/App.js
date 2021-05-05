import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ResultList from './ResultList';

class App extends React.Component {

state = { images: [] };

onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID F-8-8Sr3OFOTZkfwpTsPmN8q4stKejBz4D7ExPTSPLI'
        },
        params: {
            query: term
        }
    });

    this.setState({ images: response.data.results });
}

    render() {
        return (
            <div className="ui container">
                <SearchInput searchValue={this.onSearchSubmit} />
                <ResultList images={this.state.images} />
            </div>
        );
    }
}

export default App;