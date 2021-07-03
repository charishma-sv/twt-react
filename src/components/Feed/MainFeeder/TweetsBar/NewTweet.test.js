import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NewTweet from './NewTweet';
import renderer from 'react-test-renderer';
import { mockFirebase } from 'firestore-jest-mock';

mockFirebase({
  database: {
    users: [
      { id: 'abc123', displayName: 'abc123', email: 'abc123@gmail.com' },
      { id: 'abc456', displayName: 'Lisa Simpson', email: 'abc456@gmail.com' },
    ],
    tweets: [
      {
        id: '123abc',
        description: 'Really cool title',
        user: { displayName: 'abc123', email: 'abc123@gmail.com' },
      },
    ],
  },
});

it('should snapshot', () => {
  const component = renderer.create(<NewTweet />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('should display entered value in input', () => {
  const value = 'My tweet';
  render(<NewTweet />);
  const tweetInput = screen.getByTestId('tweet-input');
  fireEvent.change(tweetInput, { target: { value } });
  expect(tweetInput.value).toBe('My tweet');
});

it.skip('should call addTweet function', async () => {
  const addTweetMock = jest.fn();
  render(<NewTweet addTweet={addTweetMock} />);
  const tweetInput = screen.getByTestId('tweet-input');
  fireEvent.change(tweetInput, { target: { value: 'charishma' } });
  const addTweetBtn = screen.getByTestId('add-tweet');
  fireEvent.click(addTweetBtn);
  await waitFor(() => undefined);
  expect(addTweetMock).toHaveBeenCalledTimes(1);
});
