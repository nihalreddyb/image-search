import React from 'react';

class SearchInput extends React.Component {

    state = {searchText: ''};

    onFormSubmit = event => {
        event.preventDefault();
        this.props.searchValue(this.state.searchText);
    }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search Images</label>
                    <input value={this.state.searchText} onChange={e => this.setState({searchText: e.target.value})} type="text" placeholder="Search For any Images.." />
                </div> 
            </form>
        </div>
        );
    }
}

export default SearchInput;