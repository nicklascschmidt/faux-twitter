import React, { Component } from 'react';

import Loading from '../Loading/Loading';
import EmptyTimeline from '../EmptyTimeline/EmptyTimeline';
import TweetTimeline from './TweetTimeline';

class TweetTimelineWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      errorMessage: '',
      timelineData: [],
      userData: {},
    };
  }

  componentDidMount() {
    // this.fetchTweetsByUser();
    /**TODO:
     * pull user search from localStorage and auto populate the timeline w 10 tweets
     */
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchTerm } = this.props;
    if (prevProps.searchTerm !== searchTerm) {
      this.setState({ isLoading: true });
      this.populateTimeline(searchTerm);
    }
  }

  populateTimeline = async (searchTerm) => {
    /**
     * TODO: need to find a better place to store
     * userData, timelineData, timelineMetaData (pagination info)
     */
    const userData = await this.fetchUser(searchTerm);
    console.log('userData', userData);

    const timelineData = userData.id ? await this.fetchTweetsByUser(userData.id) : [];
    console.log('timelineData', timelineData);

    this.setState({ userData, timelineData, isLoading: false });
  };

  fetchUser = (userHandle) => {
    return fetch(`/api/user/${userHandle}`)
      .then((response) => response.json())
      .catch((err) => this.setState(err.message));
  };

  fetchTweetsByUser = (userId) => {
    return fetch(`/api/user/${userId}/tweets`)
      .then((response) => response.json())
      .catch((err) => this.setState(err.message));
  };

  render() {
    const { isLoading, errorMessage, timelineData, userData } = this.state;
    const { searchTerm } = this.props;

    if (isLoading) return <Loading />;
    return (
      <>
        {errorMessage && <div>{ errorMessage }</div>}
        {timelineData.length > 0 ? (
          <TweetTimeline timelineData={timelineData} />
        ) : (
          <EmptyTimeline
            searchTerm={searchTerm}
            isUserEmpty={Object.keys(userData).length === 0}
          />
        )}
      </>
    );
  }
}

export default TweetTimelineWrapper;
