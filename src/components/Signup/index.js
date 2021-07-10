import React from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { createUser } from '../../firebase';
import SVGComponent from '../../reusableComponents/SVGComponent';
const Signup = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayName, setDisplayName] = React.useState('');
  const [error, setError] = React.useState(null);
  const [emailClick, setEmailClick] = React.useState(false);
  const [passwordClick, setPasswordClick] = React.useState(false);
  const [displayNameClick, setDisplayNameClick] = React.useState(false);
  const [imageFile, setImageFile] = React.useState([]);

  const onClickHandler = (e) => {
    const element = e.currentTarget;
    const id = element.getAttribute('id');
    if (id === 'signUpEmail') {
      setEmailClick(true);
      const emailLabel = document.getElementById('emailLabel');
      emailLabel.style.fontSize = '12px';
    } else if (id === 'signUpPassword') {
      setPasswordClick(true);
      const passwordLabel = document.getElementById('passwordLabel');
      passwordLabel.style.fontSize = '12px';
    } else if (id === 'signUpDisplayName') {
      setDisplayNameClick(true);
      const displayNameLabel = document.getElementById('displayNameLabel');
      displayNameLabel.style.fontSize = '12px';
    }
  };

  const restoreStyle = (e) => {
    const element = e.currentTarget;
    const id = element.getAttribute('id');
    if (element.value !== '') return;
    if (id === 'signUpEmail') {
      setEmailClick(false);
      const emailLabel = document.getElementById('emailLabel');
      emailLabel.style.fontSize = '16px';
    } else if (id === 'signUpPassword') {
      setPasswordClick(false);
      const passwordLabel = document.getElementById('passwordLabel');
      passwordLabel.style.fontSize = '16px';
    } else if (id === 'signUpDisplayName') {
      setDisplayNameClick(false);
      const displayNameLabel = document.getElementById('displayNameLabel');
      displayNameLabel.style.fontSize = '16px';
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
    } else if (name === 'userDisplayName') {
      setDisplayName(value);
      setDisplayNameClick(true);
      const displayNameGroup = document.getElementById('displayNameGroup');
      displayNameGroup.style.fontSize = '12px';
    }
  };

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password,
    displayName
  ) => {
    event.preventDefault();

    try {
      const user = await createUser(email, password, displayName, imageFile);
      props.updateUser(user);
    } catch (error) {
      console.log('error in signup ', error);
      setError('Error Signing up with email and password');
    }
    setEmail('');
    setPassword('');
    setDisplayName('');
    setImageFile([]);
  };

  const onImageInputChange = () => {
    const imageInput = document.getElementById('signup-image-input');

    setImageFile(imageInput.files[0]);
  };

  return (
    <Container fluid className="common-style" style={{ flex: '1 1 0%' }}>
      <Container fluid className="common-style flex-row w-100" style={{}}>
        <Container
          fluid
          className="d-block position-relative p-0 m-0"
          style={{
            minWidth: '0px',
            minHeight: '0px',
            inset: '0',
          }}
        >
          <Container
            fluid
            className="d-flex flex-column flex-grow-1 flex-shrink-1"
            style={{ alignSelf: 'stretch' }}
          >
            <Modal
              data-testid="modal-content"
              show={true}
              animation="false"
              centered
              dialogClassName="customModal"
              className="m-0 d-flex flex-row align-items-center justify-content-center  position-fixed bg-white"
            >
              <div
                className="position-fixed "
                style={{
                  top: '0px',
                  bottom: '0px',
                  left: '0px',
                  right: '0px',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  zIndex: -1,
                }}
              ></div>
              <Modal.Header
                className="p-0 d-flex  align-items-center border-0"
                style={{ height: '53px' }}
              >
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: '53px' }}
                >
                  {/* empty space */}
                  <Container className="d-flex align-items-center flex-grow-1 h-100"></Container>
                  {/* svg bird */}
                  <Container
                    className="d-flex align-items-center justify-content-center flex-shrink-1 h-100"
                    style={{ flexBasis: '25%' }}
                  >
                    <SVGComponent
                      className="p-0 m-0 d-flex flex-column justify-content-center align-items-center flex-grow-1"
                      color="rgba(29,161,242,1.00)"
                      width="100%"
                      height="1.75rem"
                      path="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                    />
                  </Container>
                  {/* button to signup */}
                  <Container className="d-flex align-items-center justify-content-end flex-grow-1 h-100">
                    <Button
                      data-testid="signup-btn"
                      variant="custom-color"
                      type="submit"
                      className="rounded-pill"
                      style={{ fontWeight: '700' }}
                      onClick={(event) => {
                        createUserWithEmailAndPasswordHandler(
                          event,
                          email,
                          password,
                          displayName,
                          imageFile
                        );
                      }}
                    >
                      Next
                    </Button>
                  </Container>
                </Container>
              </Modal.Header>

              <Modal.Body
                className=" p-0 d-flex flex-column align-items-stretch flex-grow-1 flex-shrink-1"
                style={{
                  marginLeft: '32px',
                  marginRight: '32px',
                }}
              >
                <Form
                  className="m-0 p-0 d-flex flex-column align-items-stretch flex-grow-1 flex-shrink-1"
                  style={{ overflow: 'auto' }}
                >
                  <Container
                    fluid
                    className=" p-0 d-flex flex-column align-items-stretch w-100 "
                    style={{}}
                  >
                    {/* create your account */}
                    <Container
                      fluid
                      className="d-inline p-0"
                      style={{
                        lineHeight: '28px',
                        fontSize: '23px',
                        color: 'rgb(15, 20, 25)',
                        fontWeight: '700',
                        marginTop: '16px',
                        marginBottom: '16px',
                        overflowWrap: 'break-word',
                        minWidth: '0px',
                      }}
                    >
                      <span
                        className="p-0 m-0 d-inline"
                        style={{ overflowWrap: 'break-word', minWidth: '0px' }}
                      >
                        Create your account
                      </span>
                    </Container>
                    {error ? `${error}` : ''}
                    {/* Name input */}

                    <Form.Group
                      id="displayNameGroup"
                      className="m-0 d-flex flex-column align-items-stretch"
                      style={{ paddingTop: '12px', paddingBottom: '12px' }}
                    >
                      <Form.Label className="d-flex border border-gray rounded h-100 m-0 p-0">
                        <div
                          className="m-0 p-0 h-100 position-relative"
                          style={{ zIndex: '1' }}
                        >
                          <span
                            data-testid="display-name-label"
                            id="displayNameLabel"
                            className={`p-0 position-absolute h-100 ${
                              displayNameClick ? 'p-1 pl-3' : 'p-3'
                            }`}
                          >
                            Username
                          </span>
                        </div>
                        <Form.Control
                          data-testid="signup-display-name"
                          id="signUpDisplayName"
                          onBlur={(e) => restoreStyle(e)}
                          onClick={(event) => onClickHandler(event)}
                          className={`p-3 border-0 mt-4 ${
                            displayNameClick ? 'inputBorder' : ''
                          }`}
                          name="userDisplayName"
                          value={displayName}
                          type="text"
                          onChange={(event) => onChangeHandler(event)}
                        />
                      </Form.Label>
                    </Form.Group>

                    {/*  email input */}

                    <Form.Group
                      className="m-0 d-flex flex-column align-items-stretch"
                      style={{ paddingTop: '12px', paddingBottom: '12px' }}
                    >
                      <Form.Label className="d-flex border border-gray rounded h-100 m-0 p-0">
                        <div
                          className="m-0 p-0 h-100 position-relative"
                          style={{ zIndex: '1' }}
                        >
                          <span
                            data-testid="email-label"
                            id="emailLabel"
                            className={`position-absolute h-100 ${
                              emailClick ? 'p-1 pl-3' : 'p-3'
                            }`}
                          >
                            Email
                          </span>
                        </div>
                        <Form.Control
                          data-testid="signup-email"
                          id="signUpEmail"
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

                    {/* password input */}

                    <Form.Group
                      className="m-0 d-flex flex-column align-items-stretch"
                      style={{ paddingTop: '12px', paddingBottom: '12px' }}
                    >
                      <Form.Label className="d-flex border border-gray rounded h-100 m-0 p-0">
                        <div
                          className="m-0 p-0 h-100 position-relative"
                          style={{ zIndex: '1' }}
                        >
                          <span
                            data-testid="password-label"
                            id="passwordLabel"
                            className={`position-absolute h-100 ${
                              passwordClick ? 'p-1 pl-3' : 'p-3'
                            }`}
                          >
                            Password
                          </span>
                        </div>
                        <Form.Control
                          data-testid="signup-password"
                          id="signUpPassword"
                          onBlur={(e) => restoreStyle(e)}
                          onClick={(event) => onClickHandler(event)}
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

                    {/* Images */}
                    <Form.Group
                      className="m-0 d-flex flex-column align-items-stretch"
                      style={{ paddingTop: '12px', paddingBottom: '12px' }}
                    >
                      <span>Upload image:</span>

                      <Form.Control
                        onChange={() => onImageInputChange()}
                        type="file"
                        id="signup-image-input"
                        accept="image/*"
                        style={{}}
                      />
                    </Form.Group>
                  </Container>
                </Form>
              </Modal.Body>
            </Modal>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export default Signup;
