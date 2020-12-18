import React, { Component } from 'react';
import { SearchTermContext } from './SearchTermContext';

export default class SearchTermContextWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '', // faux_twitr
      updateSearchTerm: this.updateSearchTerm,
    };
  }

  updateSearchTerm = (searchTerm) => {
    console.log('attempting to update searchTerm: ', searchTerm);
    this.setState({ searchTerm });
  }
  
  render() {
    return (
      <SearchTermContext.Provider value={this.state}>
        {this.props.children}
      </SearchTermContext.Provider>
    )
  }
}
