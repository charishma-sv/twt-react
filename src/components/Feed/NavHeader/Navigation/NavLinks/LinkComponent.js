import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SVGComponent from '../../../../../reusableComponents/SVGComponent';
const LinkComponent = ({ name, path, icon }) => {
  return (
    <Link
      to={path}
      className="d-flex flex-column flex-grow-1 align-items-start w-100 p-0"
    >
      <Container
        fluid
        className="m-0  w-auto d-flex align-items-center justify-content-start mw-100"
        style={{
          flexDirection: 'row',
          padding: '12px',
          transitionProperty: 'background-color, box-shadow',
          transitionDuration: '0.2s',
        }}
      >
        <SVGComponent
          color="rgba(29,161,242,1.00)"
          path={icon}
          height="1.75rem"
          width="2rem"
          className="p-0 m-0 d-flex flex-column align-items-stretch mw-100 w-auto"
        />
        <Container
          fluid
          className="d-inline p-0 w-auto"
          style={{
            marginRight: '16px',
            marginLeft: '20px',
            lineHeight: '24px',
            fontSize: '20px',
            fontWeight: '700',
            overflowWrap: 'break-word',
            minWidth: '0px',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: 'rgba(29,161,242,1.00',
          }}
        >
          <span>{name}</span>
        </Container>
      </Container>
    </Link>
  );
};

export default LinkComponent;
