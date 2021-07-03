import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Feed from '.';
import firebase from '../../firebase';

jest.mock('firebase/app', () => {
  const firebaseMock = require('firebase-mock');
  const mockAuth = new firebaseMock.MockAuthentication();
  const mockFirestore = new firebaseMock.MockFirestore();
  return new firebaseMock.MockFirebaseSdk(
    null,
    () => mockAuth,
    () => mockFirestore
  );
});
// const addTweet = jest.fn(() =>
//   firebase
//     .firestore()
//     .collection('tweets')
//     .doc('456')
//     .set({
//       comments: '1',
//       description: '456 tweet',
//       user: { displayName: '456', email: '456@gmail.com' },
//     })
// );
describe('Feed component', () => {
  beforeAll(() => {
    firebase.firestore().autoFlush();
    firebase
      .firestore()
      .collection('tweets')
      .doc('123')
      .set({
        comments: '0',
        description: 'hello 123',
        user: {
          displayName: '123',
          email: '123@gmail.com',
        },
      });
  });

  it('should match snapshot of Feed Component', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Feed />
      </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should add new tweet', async () => {
    const addTweetMock = jest.fn();

    act(() => {
      render(
        <BrowserRouter>
          <Feed addTweet={addTweetMock} />
        </BrowserRouter>
      );
    });
    const tweetInput = await screen.findByTestId('tweet-input');

    const value = 'my new tweet';
    fireEvent.change(tweetInput, { target: { value } });
    const addButton = await screen.findByTestId('add-tweet');
    act(() => {
      fireEvent.click(addButton);
    });
    await waitFor(() => undefined);

    expect(addTweetMock).toHaveBeenCalled();
  });
  it('should display tweets', async () => {
    render(
      <BrowserRouter>
        <Feed />
      </BrowserRouter>
    );
    const tweetDescription = await screen.findByText(/hello 123/);
    expect(tweetDescription).toBeDefined();
  });

  it('should delete tweet', async () => {
    render(
      <BrowserRouter>
        <Feed />
      </BrowserRouter>
    );
    await waitFor(() => undefined);
    const deleteButton = screen.getByTestId('123');
    act(() => {
      fireEvent.click(deleteButton);
    });
    const response = firebase.firestore().collection('tweets');
    const data = await response.get();
    // const tweetDescription = await screen.findByText(/hello 123/);
    // expect(tweetDescription).not.toBeDefined();
    expect(data.docs.length).toBe(0);
  });
});
