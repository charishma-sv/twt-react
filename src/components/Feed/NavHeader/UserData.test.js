import UserData from './UserData';
import { fireEvent, render, screen } from '@testing-library/react';

const fakeAuth = {
  signOut: () => {
    console.log('sign out testing');
    return jest.fn();
  },
};

jest.mock('firebase/app', () => {
  const firebaseMock = require('firebase-mock');
  const mockFirestore = new firebaseMock.MockFirestore();
  return new firebaseMock.MockFirebaseSdk(
    null,
    () => fakeAuth,
    () => mockFirestore
  );
});

describe('<SignOutButton />', () => {
  it('calls Firebase signOut on click', async () => {
    const spy = jest.spyOn(fakeAuth, 'signOut');
    render(<UserData />);
    const button = screen.getByTestId('signout');
    fireEvent.click(button);
    expect(spy).toHaveBeenCalled();
  });
});
