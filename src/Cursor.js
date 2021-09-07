import React, { Component, Fragment } from "react";
import { TweenMax } from "gsap/all";

class Cursor extends Component {
  componentDidMount() {
    const bigBall = document.querySelector(".cursor__ball--big");
    const smallBall = document.querySelector(".cursor__ball--small");
    const hoverables = document.querySelectorAll(".hoverable");

    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener("mouseenter", onMouseHover);
      hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
      TweenMax.to(bigBall, 0.4, {
        x: e.clientX - 15,
        y: e.clientY - 15
      });
      TweenMax.to(smallBall, 0.1, {
        x: e.clientX - 5,
        y: e.clientY - 7
      });
    }

    // Hover an element
    function onMouseHover() {
      TweenMax.to(bigBall, 0.3, {
        scale: 4
      });
    }
    function onMouseHoverOut() {
      TweenMax.to(bigBall, 0.3, {
        scale: 1
      });
    }
  }

  render() {
    const cursorStyle = {
      pointerEvents: "none"
    };
    const cursorBall = {
      position: "fixed",
      top: 0,
      left: 0,
      mixBlendMode: "difference",
      zIndex: 9998
    };
    const ballCircle = {
      fill: "#f7f8fa"
    };
    return (
      <Fragment>
        <div style={cursorStyle} className="cursor">
          <div style={cursorBall} className="cursor__ball cursor__ball--big ">
            <svg height="30" width="30">
              <circle
                style={ballCircle}
                cx="15"
                cy="15"
                r="12"
                strokeWidth="0"
              ></circle>
            </svg>
          </div>
          <div style={cursorBall} className="cursor__ball cursor__ball--small">
            <svg height="10" width="10">
              <circle
                style={ballCircle}
                cx="5"
                cy="5"
                r="4"
                strokeWidth="0"
              ></circle>
            </svg>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cursor;
