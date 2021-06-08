import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NavHeader from './NavHeader';
import MainFeeder from './MainFeeder';
import { getTweetsCollection, deleteTweetDocument } from '../../firebase';

const Feed = (props) => {
  const [tweets, setTweets] = React.useState([]);
  console.log('props in feed', props);
  const getTweets = async () => {
    console.log('$$$testing functions');
    const tweets = await getTweetsCollection();
    console.log('$$$tweets in feed', tweets);
    setTweets(tweets);
  };

  useEffect(getTweets, []);

  const deleteTweet = async (tweetId) => {
    await deleteTweetDocument(tweetId);
    getTweets();
  };

  return (
    <Container fluid className="common-style" style={{ flex: '1 1 0%' }}>
      <Container
        fluid
        className="common-style flex-row w-100"
        style={{ minHeight: '100vh' }}
      >
        <header className="common-style flex-grow-1 align-items-end z-3">
          <Container fluid className="common-style" style={{ width: '275px' }}>
            <Container
              fluid
              className="common-style h-100 position-fixed"
              style={{ top: '0px', width: '275px' }}
            >
              <NavHeader />
            </Container>
          </Container>
        </header>
        <main className="common-style flex-grow-1 flex-shrink-1 align-items-start">
          <MainFeeder
            tweets={tweets}
            updateTweets={getTweets}
            deleteTweet={deleteTweet}
          />
        </main>
      </Container>
    </Container>
  );
};

export default Feed;
