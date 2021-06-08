import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="mt-3 mx-auto">
        <div
          className=" text-center p-1"
          style={{ fontSize: '13px', overflow: 'hidden' }}
        >
          <Link to="" className="mr-3" style={{ color: 'rgb(91, 112, 131)' }}>
            About
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Help Center
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Terms of Service
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Privacy policy
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Cookie policy
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Ads info
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Blog
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Status
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            careers
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Brand Resources
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Advertising
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Marketing
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Twitter for Business
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Developers
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Directory
          </Link>
          <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
            Settings
          </Link>
          <div className="text-center  mt-2">
            <Link to="" className="mr-3" style={{ color: 'rgb(91,112,131)' }}>
              &#169; 2021 Twitter, Inc.
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
