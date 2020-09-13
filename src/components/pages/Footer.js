import React from 'react';
import './css/App.css';
import Scroll from './Scroll';
import Instagram from './assets/img/instagram.png';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div class="container">
      <hr class="featurette-divider" />
      <div class="row justify-content-center ">
        <div class="col-sm">
          <p>Head Office: 160 Sussex St, Sydney NSW 2000</p>
          <p>ABN 33 111 444 555 116</p>
        </div>
        <Scroll />
        <div class="col-left">
          <Link to="privacy" class="text-black">
            Privacy <br /> <br />
          </Link>
          <Link to="term">Terms</Link>&nbsp;&nbsp;&nbsp; <br /> <br />
          <a href="https://www.instagram.com/deep_____head/" target="blank">
            <img src={Instagram} alt="" />
          </a>
          <br />
          <br />
          <p> &copy; 2020 DeepHead, Inc. </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
