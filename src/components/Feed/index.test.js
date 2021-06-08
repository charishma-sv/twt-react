import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Feed from '.';
import * as firebase from '../../../src/firebase';

// jest.mock('../../../src/firebase')
// const getTweetsCollection = jest.fn(() => Promise.resolve([]));
// jest.mock('../../../src/firebase', () => {
//   return {
//     getTweetsCollection,
//   };
// });
const getTweetsCollection = Promise.resolve([]);
jest.spyOn(firebase, 'app').mockImplementation(() => ({
  firestore: () => ({
    collection: () => ({
      get: () => getTweetsCollection,
    }),
  }),
}));
describe(' Feed component', () => {
  it('should match snapshot of Feed Component', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Feed />
      </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should mount the component', async () => {
    render(
      <BrowserRouter>
        <Feed />
      </BrowserRouter>
    );

    // await waitFor(() => expect(getTweetsCollection).toHaveBeenCalled());
  });
});
