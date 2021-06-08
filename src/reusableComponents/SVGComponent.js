import React from 'react';
import { Container } from 'react-bootstrap';

function SVGComponent(props) {
  return (
    <Container fluid className={props.className} style={props.componentStyle}>
      <svg
        viewBox="0 0 24 24"
        fill={props.color}
        style={{ width: props.width, height: props.height, margin: '0px' }}
        className="d-inline-block"
      >
        <g>
          <path d={props.path}></path>
        </g>
      </svg>
    </Container>
  );
}

export default SVGComponent;
