import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Login from '.';
import {
  fireEvent,
  findByTestId,
  render,
  screen,
  wait,
  waitFor,
} from '@testing-library/react';
describe(' Login component', () => {
  it('should match snapshot of Login Component', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('login email input', () => {
  it('should have fontsize 16px for emailLabel on blur email input', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId('login-email');

    fireEvent.blur(emailInput);
    const emailLabel = screen.getByTestId('email-label').style.fontSize;
    expect(emailLabel).toBe('16px');
  });

  it('should have fontsize 12px for emailLabel on clicking email input', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId('login-email');

    fireEvent.click(emailInput);
    const emailLabel = screen.getByTestId('email-label').style.fontSize;
    expect(emailLabel).toBe('12px');
  });

  it('should display entered value in input', () => {
    const value = 'My email';
    const onChange = jest.fn();
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId('login-email');
    fireEvent.change(emailInput, { target: { value } });
    expect(emailInput.value).toBe('My email');
  });
});

describe('password input', () => {
  it('should have fontsize 16px for passwordLabel on blur password input', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const passwordInput = screen.getByTestId('login-password');

    fireEvent.blur(passwordInput);
    const passwordLabel = screen.getByTestId('password-label').style.fontSize;
    expect(passwordLabel).toBe('16px');
  });

  it('should have fontsize 12px for passwordLabel on clicking password input', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const passwordInput = screen.getByTestId('login-password');

    fireEvent.click(passwordInput);
    const passwordLabel = screen.getByTestId('password-label').style.fontSize;
    expect(passwordLabel).toBe('12px');
  });

  it('should display entered value in input', () => {
    const value = 'My password';
    const onChange = jest.fn();
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const passwordInput = screen.getByTestId('login-password');
    fireEvent.change(passwordInput, { target: { value } });
    expect(passwordInput.value).toBe('My password');
  });
});
