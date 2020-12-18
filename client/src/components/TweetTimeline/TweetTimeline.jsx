import React, { Component } from 'react';
import styled from 'styled-components';
import SearchInput from '../SearchInput/SearchInput';
import { SearchTermContext } from '../Context/SearchTermContext';

const Container = styled.section`
  width: 600px;
  border-left: 1px solid ${({ theme }) => theme.borderPrimary};
  border-right: 1px solid ${({ theme }) => theme.borderPrimary};
`;

const PageHeader = styled.header`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 19px;
  }
`;

class TweetTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '', // faux_twitr
      updateSearchTerm: this.updateSearchTerm,
    };
  }

  async componentDidMount() {
    // const url = 'https://stream.twitter.com/1.1/statuses/sample.json';
    const url = '/user';
    const resp = await fetch(url, {
      credentials: 'include' // fetch won't send cookies unless you set credentials
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
    console.log('resp', resp);
  }

  updateSearchTerm = (searchTerm) => {
    console.log('attempting to update searchTerm: ', searchTerm);
    this.setState({ searchTerm });
  }

  render() {
    return (
      <SearchTermContext.Provider value={this.state}>
        <Container>
          <PageHeader>
            <h2>Home</h2>
            <SearchTermContext.Consumer>
              {({ searchTerm, updateSearchTerm }) => (
                <SearchInput initialValue={searchTerm} handleSubmit={updateSearchTerm} />
              )}
            </SearchTermContext.Consumer>
          </PageHeader>
          {this.props.children}
        </Container>
      </SearchTermContext.Provider>
    );
  }
}

export default TweetTimeline;
