import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { withRouter } from "react-router-dom";
const Error404 = withRouter(({ history }) => (
  <div>
    <div class="container container-star">
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-1"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
      <div class="star-2"></div>
    </div>
    <div class="container container-bird">
      <div class="bird bird-anim">
        <div class="bird-container">
          <div class="wing wing-left">
            <div class="wing-left-top"></div>
          </div>
          <div class="wing wing-right">
            <div class="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div class="bird bird-anim">
        <div class="bird-container">
          <div class="wing wing-left">
            <div class="wing-left-top"></div>
          </div>
          <div class="wing wing-right">
            <div class="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div class="bird bird-anim">
        <div class="bird-container">
          <div class="wing wing-left">
            <div class="wing-left-top"></div>
          </div>
          <div class="wing wing-right">
            <div class="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div class="bird bird-anim">
        <div class="bird-container">
          <div class="wing wing-left">
            <div class="wing-left-top"></div>
          </div>
          <div class="wing wing-right">
            <div class="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div class="bird bird-anim">
        <div class="bird-container">
          <div class="wing wing-left">
            <div class="wing-left-top"></div>
          </div>
          <div class="wing wing-right">
            <div class="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div class="bird bird-anim">
        <div class="bird-container">
          <div class="wing wing-left">
            <div class="wing-left-top"></div>
          </div>
          <div class="wing wing-right">
            <div class="wing-right-top"></div>
          </div>
        </div>
      </div>
      <div class="container-title">
        <div class="title">
          <div class="number">4</div>
          <div class="moon">
            <div class="face">
              <div class="mouth"></div>
              <div class="eyes">
                <div class="eye-left"></div>
                <div class="eye-right"></div>
              </div>
            </div>
          </div>
          <div class="number">4</div>
        </div>
        <div class="subtitle">Oops. Looks like you took a wrong turn.</div>
        <button
          className="button"
          onClick={() => {
            history.push({
              pathname: "/",
            });
          }}
        >
          Go back
        </button>
      </div>
    </div>
  </div>
));

export default Error404;
