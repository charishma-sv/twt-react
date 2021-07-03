import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderPageName from './HeaderPageName';
import NewTweet from './NewTweet';
import TweetsList from './TweetsList';

function TweetsBar(props) {
  return (
    <Container
      className="common-style bd-r-1 bd-l-1 z-1 w-100 bg-c bd-c bd-solid"
      style={{ maxWidth: '600px' }}
    >
      <Container className="common-style">
        <HeaderPageName />
        <NewTweet
          updateTweets={props.updateTweets}
          addTweet={props.addTweet}
          newTweetMediaFilesHandler={props.newTweetMediaFilesHandler}
          attachment={props.attachment}
          attachmentFiles={props.attachmentFiles}
          removeAttachment={props.removeAttachment}
        />
        <div
          className="border-top border-bottom"
          style={{ height: '12px', backgroundColor: 'rgb(247, 249, 250)' }}
        ></div>
        <TweetsList tweets={props.tweets} deleteTweet={props.deleteTweet} />
      </Container>
    </Container>
  );
}

export default TweetsBar;
