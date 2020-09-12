import React from 'react';
import './App.css';
import Footer from './Footer';

function Team() {
  return (
    <div className="Team">
      <section class="page-section bg-light" id="team">
        <div class="container">
          <div class="text-center">
            <p></p><h1 class="section-heading text-uppercase">Our Amazing Team</h1>
            <h4 class="section-subheading text-muted">
              <p class="font-weight-bold">We care about our customers.</p>
             
              <div class="col-lg-8 mx-auto text-center">
             <h6 class="font-weight-normal">
             <p class="large text-muted p-3">
               Deep Head management team is comprised of 
              people with passion for the ICT industry, especially in Business Strategies (SEO) 
              /Big data analysing /ICT management.
              Our philosophy is to focus on the client’s needs. 
              Chief Executive Officer(CEO), Chief Operating Officer (COO), 
              Chief Technology Officer (CTO) and Chief Marketing Officer (CMO).
              </p>
              </h6>
              </div>
            </h4>
          </div>
          <hr class="my-2"></hr>
          <div class="row">
            <div class="col-lg-4 p-5">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src={require('../assets/img/Duyoung.png')}
                  alt=""
                />
                <h4>Duyoung Jang</h4>
                <p class="text-muted">Chief Executive Officer (CEO)</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://github.com/kianjay"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://www.linkedin.com/in/kianjay"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <p class="p-3">He is responsible for strategy, vision and growth of the 
                company and has the ability to rise above the daily details and
                 decide where the industry and business are headed.
                </p> 
              </div>
            </div>
            <div class="col-lg-4 p-5">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src={require('../assets/img/Insub.jpg')}
                  alt=""
                />
                <h4>Insub Kim</h4>
                <p class="text-muted">Chief Technology Officer (CTO)</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://github.com/slothpunch"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://www.linkedin.com/in/insub-kim-61612419b/"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <p class="p-3">He is responsible for the development and 
                architecture of Enterprise Web Applications and knows how 
                collaboration and mutual inspiration. 
                </p>
              </div>
            </div>
            <div class="col-lg-4 p-5">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src={require('../assets/img/Sohwa.jpg')}
                  alt=""
                />
                <h4>Sohwa Lee</h4>
                <p class="text-muted">Chief Strategy Officer (CSO)</p>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://github.com/tagonanmm"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  class="btn btn-dark btn-social mx-2"
                  href="https://www.linkedin.com/in/sohwalee/"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <p class="p-3">She is responsible for business development 
                and advising clients in the area of UI/UX Design.</p> 
              </div>
            </div>
          </div>
          <hr class="my-2"></hr>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center p-3">
              <p class="large text-muted">
                We are experienced and always listen to our customers. Our team
                creates websites and mobile applications to give customers the
                best satisfaction. We are all willing to hear feedback from
                customers.{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/logos/envato.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/logos/designmodo.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/logos/themeforest.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  class="img-fluid d-block mx-auto"
                  src="assets/img/logos/creative-market.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Team;
