import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-left">
              <div className="career-role">
                <h4>B.E. Information Science</h4>
                <h5>Sri Siddhartha Institute of Technology</h5>
              </div>
              <h3 className="career-date">2020 - 2024</h3>
            </div>
            <div className="career-right">
              <p>
                Bachelor of Engineering in Information Science with a CGPA of 7.45.
                Focused on software development, data structures, and AI/ML
                coursework.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-left">
              <div className="career-role">
                <h4>Java Full Stack Developer Intern</h4>
                <h5>Glisten Project Solutions Pvt. Ltd.</h5>
              </div>
              <h3 className="career-date">Aug - Sep 2023</h3>
            </div>
            <div className="career-right">
              <p>
                Developed scalable full-stack web applications using Java
                technologies. Gained hands-on experience in backend development,
                database integration, and learned best practices in software
                architecture and deployment workflows.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-left">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>DeepLearning.AI &amp; IBM</h5>
              </div>
              <h3 className="career-date">2023</h3>
            </div>
            <div className="career-right">
              <p>
                AI for Everyone (DeepLearning.AI), Python 101 for Data Science
                (IBM), Cybersecurity Roles, Processes &amp; OS Security (IBM).
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Career;
