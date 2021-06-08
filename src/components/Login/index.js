import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [emailClick, setEmailClick] = React.useState(false);
  const [passwordClick, setPasswordClick] = React.useState(false);

  const onClickHandler = (e) => {
    const element = e.currentTarget;
    const id = element.getAttribute('id');
    if (id === 'loginEmail') {
      setEmailClick(true);
      const emailLabel = document.getElementById('emailLabel');
      emailLabel.style.fontSize = '12px';
    } else if (id === 'loginPassword') {
      setPasswordClick(true);
      const passwordLabel = document.getElementById('passwordLabel');
      passwordLabel.style.fontSize = '12px';
    }
  };

  const restoreStyle = (e) => {
    const element = e.currentTarget;
    const id = element.getAttribute('id');
    if (element.value !== '') return;
    if (id === 'loginEmail') {
      setEmailClick(false);
      const emailLabel = document.getElementById('emailLabel');
      emailLabel.style.fontSize = '16px';
    } else if (id === 'loginPassword') {
      setPasswordClick(false);
      const passwordLabel = document.getElementById('passwordLabel');
      passwordLabel.style.fontSize = '16px';
    }
  };

  const onChangeHandler = (event) => {
    const element = event.currentTarget;
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
      setEmailClick(true);
      element.parentNode.parentNode.style.fontSize = '12px';
    } else if (name === 'userPassword') {
      setPassword(value);
      setPasswordClick(true);
      element.parentNode.parentNode.style.fontSize = '12px';
    }
  };

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError('Error signing in with password and email!');
      console.error('Error signing in with password and email', error);
    });
  };

  return (
    <Container fluid className="h-100 p-0 d-flex justify-content-center mt-4">
      <Container
        fluid
        className="pl-3 pr-3 mt-4 m-0 "
        style={{ width: '400px' }}
      >
        <Container fluid className="w-100">
          <Container fluid className="login-header ">
            <svg
              viewBox="0 0 24 24"
              fill="#1DA1F2"
              className="position-relative d-block "
              style={{ height: '30px', width: '30px' }}
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>

            <h1 className="display-5 font-weight-bold mt-4 mb-2">
              Log in to Twitter
            </h1>
            {error ? `${error}` : ''}
          </Container>
          <Container fluid className="login-form p-0">
            <Form>
              <Form.Group className="row  m-3">
                <Form.Label className=" col border border-gray rounded h-100 m-0 p-0">
                  <div
                    className="m-0 p-0 h-100 position-relative"
                    style={{ zIndex: '1' }}
                  >
                    <span
                      id="emailLabel"
                      className={`position-absolute h-100 ${
                        emailClick ? 'p-1 pl-3' : 'p-3'
                      }`}
                    >
                      Phone, email, or username
                    </span>
                  </div>
                  <Form.Control
                    id="loginEmail"
                    onBlur={(e) => restoreStyle(e)}
                    onClick={(event) => onClickHandler(event)}
                    className={`col p-3 border-0 mt-4 ${
                      emailClick ? 'inputBorder' : ''
                    }`}
                    name="userEmail"
                    value={email}
                    type="email"
                    onChange={(event) => onChangeHandler(event)}
                  />
                </Form.Label>
              </Form.Group>
              <Form.Group className="row  m-3">
                <Form.Label className=" col border border-gray rounded h-100 m-0 p-0">
                  <div
                    className="m-0 p-0 h-100 position-relative"
                    style={{ zIndex: '1' }}
                  >
                    <span
                      id="passwordLabel"
                      className={`position-absolute h-100 ${
                        passwordClick ? 'p-1 pl-3' : 'p-3'
                      }`}
                    >
                      Password
                    </span>
                  </div>
                  <Form.Control
                    id="loginPassword"
                    onClick={(event) => onClickHandler(event)}
                    onBlur={(e) => restoreStyle(e)}
                    className={`col p-3 border-0 mt-4 ${
                      passwordClick ? 'inputBorder' : ''
                    }`}
                    name="userPassword"
                    value={password}
                    type="password"
                    onChange={(event) => onChangeHandler(event)}
                  />
                </Form.Label>
              </Form.Group>
              <Form.Group className=" m-3">
                <Button
                  variant="custom-color"
                  type="submit"
                  block
                  className="rounded-pill"
                  onClick={(event) => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                  }}
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Container>
          <Container fluid className="p-0">
            <div className="text-center" style={{ color: '#1da1f2' }}>
              <span>Forgot Password?</span> .{' '}
              <Link style={{ color: '#1da1f2' }} to="/signup">
                Signup for Twitter
              </Link>
            </div>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Login;
