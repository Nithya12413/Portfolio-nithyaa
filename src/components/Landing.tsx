import { PropsWithChildren } from "react";
import "./styles/Landing.css";

import Landing3D from "./Landing3D";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NITHYA
              <br />
              <span>S S</span>
            </h1>
          </div>
          <Landing3D />
          <div className="landing-info">
            <h3>A Python</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">AI Enthusiast</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI Enthusiast</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
