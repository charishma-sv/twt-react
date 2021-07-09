import React from 'react';
import { Container } from 'react-bootstrap';
import { auth } from '../../../firebase';

const UserData = (props) => {
  const name = props.user ? props.user.displayName : '';

  const signOut = () => {
    auth.signOut();
  };

  return (
    <Container
      fluid
      className=" p-0 d-flex flex-column align-items-stretch"
      style={{ marginBottom: '12px', marginTop: '12px' }}
    >
      <Container fluid className=" p-0 d-flex flex-column align-items-stretch">
        <Container
          fluid
          className="d-flex align-items-center"
          style={{
            padding: '12px',
            outlineStyle: 'none',
            transitionProperty: 'background-color, box-shadow',
            transitionDuration: '0.2s',
            borderRadius: '9999px',
          }}
        >
          {/* photo of user */}
          <Container
            fluid
            className=" p-0 d-flex flex-column align-items-stretch w-auto"
          >
            <Container
              fluid
              className=" m-0 p-0 d-flex flex-column align-items-stretch"
              style={{
                height: '40px',
                width: '40px',
                outlineStyle: 'none',
                borderRadius: '9999px',
                overflow: 'hidden',
              }}
            >
              <Container fluid className=" p-0 d-block  position-relative">
                <Container fluid style={{ paddingBottom: '100%' }}></Container>
                <Container
                  fluid
                  className="p-0 w-100 h-100 d-block position-absolute"
                  style={{
                    top: '0px',
                    left: '0px',
                    bottom: '0px',
                  }}
                >
                  <Container
                    fluid
                    className="p-0 d-flex flex-column align-items-stretch"
                    style={{
                      flexBasis: 'auto',
                      top: '0px',
                      left: '0px',
                      bottom: '0px',
                      right: '0px',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                      zIndex: '0',
                    }}
                  >
                    <Container
                      fluid
                      className="p-0 h-100 w-100 d-flex flex-column align-items-stretch w-100 position-absolute"
                      style={{
                        backgroundImage: `url(${props.user.photoURL})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        zIndex: '-1',
                        backgroundColor: 'rgba(0,0,0,0)',
                        top: '0px',
                        bottom: '0px',
                        left: '0px',
                        right: '0px',
                      }}
                    ></Container>

                    <img
                      alt=""
                      src={props.user.photoURL}
                      className="profile-img"
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
          {/* Name of user */}
          <Container
            fluid
            className="p-0 d-flex flex-shrink-1 align-items-stretch mw-100"
            style={{ outlineStyle: 'none' }}
          >
            <Container
              fluid
              className="p-0 d-flex flex-column flex-shrink-1 flex-grow-1 aling-items-stretch mw-100"
              style={{
                outlineStyle: 'none',
                marginLeft: '12px',
                marginRight: '12px',
              }}
            >
              {/* User Name */}
              <Container fluid className="p-0 d-flex align-items-center mw-100">
                <Container
                  fluid
                  className="p-0 mw-100 d-inline"
                  style={{
                    minWidth: '0px',
                    fontWeight: '700',
                    fontSize: '15px',
                    color: 'rgb(15, 20, 25)',
                    lineHeight: '20px',
                    whiteSpace: 'nowrap',
                    overflowWrap: 'break-word',
                  }}
                >
                  <span>{name}</span>
                </Container>
              </Container>
              {/* User Handle Name */}
              <Container
                fluid
                className="p-0 d-flex flex-shrink-1 align-items-stretch"
              >
                <Container
                  fluid
                  className="p-0 d-inline mw-100"
                  style={{
                    minWidth: '0px',
                    whiteSpace: 'nowrap',
                    color: 'rgb(91, 112, 131)',
                    fontWeight: '400',
                    fontSize: '15px',

                    lineHeight: '20px',
                    overflowWrap: 'break-word',
                  }}
                >
                  <span>{`@${name}`}</span>
                </Container>
              </Container>
            </Container>
          </Container>
          {/* menu dots*/}
          <Container
            fluid
            className="p-0 d-flex flex-column align-items-end flex-grow-1"
          >
            <svg
              viewBox="0 0 24 24"
              className="position-relative mw-100 d-inline-block"
              fill="currentColor"
              style={{
                height: '1.25em',
                color: 'rgb(15, 20, 25)',
                verticalAlign: 'text-bottom',
                overflow: 'hidden',
              }}
            >
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </Container>
        </Container>
        <button
          data-testid="signout"
          className=""
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
      </Container>
    </Container>
  );
};

export default UserData;
