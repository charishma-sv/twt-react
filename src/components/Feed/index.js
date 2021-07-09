import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NavHeader from './NavHeader';
import MainFeeder from './MainFeeder';
import {
  getTweetsCollection,
  deleteTweetDocument,
  generateTweetDocument,
} from '../../firebase';

const Feed = (props) => {
  const [tweets, setTweets] = React.useState([]);
  const [attachment, setAttachment] = React.useState(false);
  const [attachmentFiles, setAttachmentFiles] = React.useState([]);

  const getTweets = async () => {
    const tweets = await getTweetsCollection();
    setTweets(tweets);
  };

  useEffect(() => {
    getTweets();
  }, []);

  const deleteTweet = async (tweetId) => {
    await deleteTweetDocument(tweetId);
    getTweets();
  };

  const addTweet = async (user, tweet, files) => {
    await generateTweetDocument(user, tweet, files);
    getTweets();
    setAttachment(false);
    setAttachmentFiles([]);
  };

  const newTweetMediaFilesHandler = (retreivedFiles) => {
    if (retreivedFiles.length !== 0) {
      const fileArr = [];

      for (let i = 0; i < retreivedFiles.length; i++) {
        fileArr.push(retreivedFiles[i]);
      }
      setAttachment(true);
      setAttachmentFiles(fileArr);
    }
  };

  const removeAttachment = (file) => {
    let newMediaArr = [];

    attachmentFiles.map((media) => {
      let resultFile;
      if (file.name.valueOf() !== media.name.valueOf()) {
        resultFile = media;
        newMediaArr.push(resultFile);
      }
      return newMediaArr;
    });
    if (!newMediaArr.length) setAttachment(false);
    setAttachmentFiles(newMediaArr);
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
              <NavHeader user={props.user} />
            </Container>
          </Container>
        </header>
        <main className="common-style flex-grow-1 flex-shrink-1 align-items-start">
          <MainFeeder
            user={props.user}
            tweets={tweets}
            updateTweets={getTweets}
            deleteTweet={deleteTweet}
            addTweet={addTweet}
            newTweetMediaFilesHandler={newTweetMediaFilesHandler}
            attachment={attachment}
            attachmentFiles={attachmentFiles}
            removeAttachment={removeAttachment}
          />
        </main>
      </Container>
    </Container>
  );
};

export default Feed;
