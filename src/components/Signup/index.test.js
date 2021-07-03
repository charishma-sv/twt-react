import Signup from '.';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

const fakeAuth = {
  createUserWithEmailAndPassword: () => Promise.reject('rejected'),
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

// describe(' signup component', () => {
//   it('should match snapshot of signup Component', () => {
//     const component = renderer.create(<Signup />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
describe('signup email input', () => {
  it('should have fontsize 16px for emailLabel on blur email input', () => {
    render(<Signup />);
    const emailInput = screen.getByTestId('signup-email');
    fireEvent.blur(emailInput);
    const emailLabel = screen.getByTestId('email-label').style.fontSize;
    expect(emailLabel).toBe('16px');
  });

  it('should have fontsize 12px for emailLabel on clicking email input', () => {
    render(<Signup />);
    const emailInput = screen.getByTestId('signup-email');
    emailInput.focus();
    fireEvent.click(emailInput);
    const emailLabel = screen.getByTestId('email-label').style.fontSize;
    expect(emailLabel).toBe('12px');
  });

  it('should display entered value in input', () => {
    const value = 'My email';
    render(<Signup />);
    const emailInput = screen.getByTestId('signup-email');
    fireEvent.change(emailInput, { target: { value } });
    expect(emailInput.value).toBe('My email');
  });

  //   it('should display entered value in input', () => {
  //     const value = 'My email';
  //     const onChange = jest.fn();
  //     render(
  //       <BrowserRouter>
  //         <Login />
  //       </BrowserRouter>
  //     );
  //     const emailInput = screen.getByTestId('login-email');
  //     fireEvent.change(emailInput, { target: { value } });
  //     expect(emailInput.value).toBe('My email');
  //   });
  // });

  // describe('password input', () => {
  //   it('should have fontsize 16px for passwordLabel on blur password input', () => {
  //     render(
  //       <BrowserRouter>
  //         <Login />
  //       </BrowserRouter>
  //     );
  //     const passwordInput = screen.getByTestId('login-password');

  //     fireEvent.blur(passwordInput);
  //     const passwordLabel = screen.getByTestId('password-label').style.fontSize;
  //     expect(passwordLabel).toBe('16px');
  //   });

  //   it('should have fontsize 12px for passwordLabel on clicking password input', () => {
  //     render(
  //       <BrowserRouter>
  //         <Login />
  //       </BrowserRouter>
  //     );
  //     const passwordInput = screen.getByTestId('login-password');

  //     fireEvent.click(passwordInput);
  //     const passwordLabel = screen.getByTestId('password-label').style.fontSize;
  //     expect(passwordLabel).toBe('12px');
  //   });

  //   it('should display entered value in input', () => {
  //     const value = 'My password';
  //     const onChange = jest.fn();
  //     render(
  //       <BrowserRouter>
  //         <Login />
  //       </BrowserRouter>
  //     );
  //     const passwordInput = screen.getByTestId('login-password');
  //     fireEvent.change(passwordInput, { target: { value } });
  //     expect(passwordInput.value).toBe('My password');
  // });
});

describe('signup displayName email input', () => {
  it('should have fontsize 16px for emailLabel on blur email input', () => {
    render(<Signup />);
    const displayNameInput = screen.getByTestId('signup-display-name');
    fireEvent.blur(displayNameInput);
    const displayNameLabel =
      screen.getByTestId('display-name-label').style.fontSize;
    expect(displayNameLabel).toBe('16px');
  });

  it('should have fontsize 12px for emailLabel on clicking email input', () => {
    render(<Signup />);
    const displayNameInput = screen.getByTestId('signup-display-name');
    displayNameInput.focus();
    fireEvent.click(displayNameInput);
    const displayNameLabel =
      screen.getByTestId('display-name-label').style.fontSize;
    expect(displayNameLabel).toBe('12px');
  });

  it('should display entered value in displayNameInput', () => {
    const value = 'My display name';
    render(<Signup />);
    const displayNameInput = screen.getByTestId('signup-display-name');
    fireEvent.change(displayNameInput, { target: { value } });
    expect(displayNameInput.value).toBe('My display name');
  });
});

describe('signup displayName input', () => {
  it('should have fontsize 16px for emailLabel on blur email input', () => {
    render(<Signup />);
    const passwordInput = screen.getByTestId('signup-password');
    fireEvent.blur(passwordInput);
    const passwordLabel = screen.getByTestId('password-label').style.fontSize;
    expect(passwordLabel).toBe('16px');
  });

  it('should have fontsize 12px for emailLabel on clicking email input', () => {
    render(<Signup />);
    const passwordInput = screen.getByTestId('signup-password');
    passwordInput.focus();
    fireEvent.click(passwordInput);
    const passwordLabel = screen.getByTestId('password-label').style.fontSize;
    expect(passwordLabel).toBe('12px');
  });

  it('should display entered value in input', () => {
    const value = 'My display name';
    render(<Signup />);
    const passwordInput = screen.getByTestId('signup-password');
    fireEvent.change(passwordInput, { target: { value } });
    expect(passwordInput.value).toBe('My display name');
  });
});

describe('creating user', () => {
  it('should throw an error when signing up', async () => {
    render(<Signup />);
    const signupBtn = screen.getByTestId('signup-btn');

    fireEvent.click(signupBtn);
    await waitFor(() => undefined);
    const error = screen.getByText('Error Signing up with email and password');
    expect(error).toBeInTheDocument();
  });
});
