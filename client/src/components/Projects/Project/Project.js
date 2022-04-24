export default function Project({
  slideInPosition,
  maskNumberBack,
  maskNumberOverlay,
  techStackName,
  techStackDetails,
}) {
  return (
    <>
      <div data-project="wishlist" className="project reveal left">
        <div className="project-mask-number">
          <div className="project-mask-number-back">Wish List</div>
          <div className="project-mask-number-front">
            <div data-index="Wish List" className="project-mask-number-overlay">
              Wish List
            </div>
          </div>
        </div>
        <div className="project-details-container">
          <div className="project-left">
            <h3 className="project-tech-stack">Wish List</h3>
            <h4 className="project-tech-stack-details">
              JavaScript | React | Express | Node.js | Firebase | CSS
            </h4>
          </div>
          <div className="project-right">
            <div className="project-links-container">
              <button
                className="project-btn live"
                onClick={() =>
                  window.open(
                    "https://paether-wishlistapp.herokuapp.com/",
                    "_blank"
                  )
                }
              >
                <span className="btn-text">Live site</span>
                <div className="btn-mask"></div>
              </button>
              <button
                className="project-btn live"
                onClick={() =>
                  window.open(
                    "https://github.com/paether/wish-list-app/",
                    "_blank"
                  )
                }
              >
                <span className="btn-text">GitHub</span>
                <div className="btn-mask"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="project-description-container wishlist">
        <div className="project-connector"></div>
        <div className="project-description">
          <h2 className="project-description-header">Main takeaways:</h2>
          <ul className="project-description-items">
            <li className="project-description-item">
              Implemented authentication using <b>bcrypt</b>, <b>JWT</b> and{" "}
              <b>Firebase</b> in <b>Express</b>. E-mail address is not required
              to register on purpose.
            </li>
            <li className="project-description-item">
              Added <b>socket.io</b> which enables frontend data updates without
              the need of refreshing the page.
            </li>
            <li className="project-description-item">
              Used <b>axios</b> for backend API <b>CRUD</b> methods.
            </li>
            <li className="project-description-item">
              Took advantage of React's <b>useCallback</b> and <b>useContext</b>{" "}
              to make the site and code more efficient and easier to use.
            </li>
            <li className="project-description-item">
              Practiced <b>GitHub's</b> pull request and branching features.
            </li>
            <li className="project-description-item">
              Deployed the prod build of the project to <b>Heroku</b>.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
