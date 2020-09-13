import React from 'react';
import './about.css';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <div class="about-section paddingTB60 gray-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-sm-6">
              <div class="about-title clearfix">
                <h1>
                  About <span>Deep head</span>
                </h1>
                <h3>About us </h3>
                <p class="about-paddingB">
                  what we do ? Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Donec aliquet dolor libero, eget venenatis
                  mauris finibus dictum. Vestibulum quis elit eget neque
                  porttitor congue non sit amet dolor. Proin pretium purus a
                  lorem ornare{' '}
                </p>
                <p>
                  sed lobortis pulvinar. Integer laoreet mi id eros porta
                  euismod. Suspendisse potenti. Nulla eros mauris, convallis et
                  sem tempus, viverra hendrerit sapien
                </p>
                <h3> Vision </h3>
                <p>
                  sed lobortis pulvinar. Integer laoreet mi id eros porta
                  euismod. Suspendisse potenti. Nulla eros mauris, convallis et
                  sem tempus, viverra hendrerit sapien
                </p>
                <h3>Goal</h3>
                <p>
                  sed lobortis pulvinar. Integer laoreet mi id eros porta
                  euismod. Suspendisse potenti. Nulla eros mauris, convallis et
                  sem tempus, viverra hendrerit sapien
                </p>
                <div class="about-icons">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i
                          id="social-fb"
                          class="fa fa-facebook-square fa-3x social"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i
                          id="social-tw"
                          class="fa fa-twitter-square fa-3x social"
                        ></i>
                      </a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a href="https://plus.google.com/">
                        <i
                          id="social-gp"
                          class="fa fa-google-plus-square fa-3x social"
                        ></i>
                      </a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a href="mailto:bootsnipp@gmail.com">
                        <i
                          id="social-em"
                          class="fa fa-envelope-square fa-3x social"
                        ></i>
                      </a>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-sm-6">
              <div class="about-img">
                <img
                  src="https://devitems.com/preview/appmom/img/mobile/2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default About;
