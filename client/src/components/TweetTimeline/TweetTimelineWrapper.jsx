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
      isUserPrivate: false,
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
    const { data: userData = {} } = await this.fetchUser(searchTerm);
    console.log('userData', userData);

    const { data: timelineData = {}, isUserPrivate = false } = userData.id
      ? await this.fetchTweetsByUser(userData.id)
      : [];

    console.log('timelineData', timelineData);

    this.setState({
      userData,
      timelineData,
      isLoading: false,
      isUserPrivate,
    });
  };

  fetchUser = (userHandle) => fetch(`/api/user/${userHandle}`)
    .catch((err) => console.log(err));

  fetchTweetsByUser = (userId) => fetch(`/api/user/${userId}/tweets`)
    .catch((err) => console.log(err));

  render() {
    const { isLoading, errorMessage, isUserPrivate, timelineData, userData } = this.state;
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
            isUserPrivate={isUserPrivate}
          />
        )}
      </>
    );
  }
}

export default TweetTimelineWrapper;
