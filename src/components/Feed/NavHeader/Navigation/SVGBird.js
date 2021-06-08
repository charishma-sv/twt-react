import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SVGComponent from '../../../../reusableComponents/SVGComponent';

class SVGBird extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container
        fluid
        className="p-0 m-0 d-flex flex-column positin-relative"
        style={{
          paddingTop: '2px',
          paddingBottom: '2px',
          fontSize: '15px',
          width: 'fit-content',
        }}
      >
        <h1
          className="m-0 d-flex flex-column align-items-center justify-content-center flex-grow-1 position-relative"
          style={{
            minWidth: '32px',
            cursor: 'pointer',
            alignSelf: 'stretch',
            backgroundColor: 'inherit',
            color: 'inherit',
            font: 'inherit',
            textAlign: 'inherit',
            textDecoration: 'inherit',
          }}
        >
          <Link
            to="/feed"
            className="p-0 d-flex flex-column "
            style={{
              minWidth: '48px',
              outlineStyle: 'none',
              minHeight: '48px',
              transitionDuration: '0.2s',
              backgroundColor: 'rgba(0,0,0,0)',
              cursor: 'pointer',
              border: '1px solid rgba(0,0,0,0)',
              borderRadius: '9999px',
              color: 'inherit',
              font: 'inherit',
              lineStyle: 'none',
              textDecoration: 'none',
              textAlign: 'inherit',
            }}
          >
            <Container
              fluid
              className="p-0 d-flex h-100 flex-grow-1 align-items-center justify-content-center "
              style={{
                flexDirection: 'row',
                fontSize: '15px',
                fontWeight: '700',
                lineHeight: '20px',
                overflowWrap: 'break-word',
                minWidth: '0px',
                color: 'rgba(29,161,242,1.00',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <SVGComponent
                color="rgba(29,161,242,1.00)"
                path="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                height="2rem"
                width="2rem"
              />
            </Container>
          </Link>
        </h1>
      </Container>
    );
  }
}

export default SVGBird;
