export default function Projects() {
  return (
    <section id="projects" className="projects-container">
      <div className="projects-header-container">
        <h1 className="projects-header">Projects</h1>
        <div className="projects-header-line"></div>
      </div>
      <div className="projects">
        <div data-project="wishlist" className="project reveal left">
          <div className="project-mask-number">
            <div className="project-mask-number-back">Wish List</div>
            <div className="project-mask-number-front">
              <div
                data-index="Wish List"
                className="project-mask-number-overlay"
              >
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
                <button className="project-btn live">
                  <span className="btn-text">Live site</span>
                  <div className="btn-mask"></div>
                </button>
                <button className="project-btn live">
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
                <b>Firebase</b> in <b>Express</b>. E-mail address is not
                required to register on purpose.
              </li>
              <li className="project-description-item">
                Added <b>socket.io</b> which enables frontend data updates
                without the need of refreshing the page.
              </li>
              <li className="project-description-item">
                Used <b>axios</b> for backend API <b>CRUD</b> methods.
              </li>
              <li className="project-description-item">
                Took advantage of React's <b>useCallback</b> and{" "}
                <b>useContext</b> to make the site and code more efficient and
                easier to use.
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
        <div data-project="shorturl" className="project reveal right">
          <div className="project-mask-number">
            <div className="project-mask-number-back">Short URL</div>
            <div className="project-mask-number-front">
              <div
                data-index="Short URL"
                className="project-mask-number-overlay"
              >
                Short URL
              </div>
            </div>
          </div>
          <div className="project-details-container">
            <div className="project-left">
              <div className="project-name-mobile">Short URL</div>
              <h3 className="project-tech-stack">Short URL</h3>
              <h4 className="project-tech-stack-details">
                JavaScript | React | Express | Node.js | MongoDB | CSS
              </h4>
            </div>
            <div className="project-right">
              <div className="project-links-container">
                <button className="project-btn live">
                  <span className="btn-text">Live site</span>
                  <div className="btn-mask"></div>
                </button>
                <button className="project-btn live">
                  <span className="btn-text">GitHub</span>
                  <div className="btn-mask"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-description-container shorturl">
          <div className="project-connector"></div>
          <div className="project-description">
            <h2 className="project-description-header">Main takeaways:</h2>
            <ul className="project-description-items">
              <li className="project-description-item">
                Implemented authentication using <b>bcrypt</b>, <b>JWT</b> and{" "}
                <b>Firebase</b> in <b>Express</b>. E-mail address is not
                required to register on purpose.
              </li>
              <li className="project-description-item">
                Added <b>Socket.io</b> which enables frontend data updates
                without the need of refreshing the page.
              </li>
              <li className="project-description-item">
                Used <b>Axios</b> for backend API <b>CRUD</b> methods.
              </li>
              <li className="project-description-item">
                Took advantage of React's <b>useCallback</b> and{" "}
                <b>useContext</b> to make the site and code more efficient and
                easier to use.
              </li>
              <li className="project-description-item">
                Practiced <b>GitHub's</b> pull request and branching features.
              </li>
            </ul>
          </div>
        </div>
        <div data-project="portfolio" className="project reveal left">
          <div className="project-mask-number">
            <div className="project-mask-number-back">Portfolio</div>
            <div className="project-mask-number-front">
              <div
                data-index="Portfolio"
                className="project-mask-number-overlay"
              >
                Portfolio
              </div>
            </div>
          </div>
          <div className="project-details-container">
            <div className="project-left">
              <div className="project-name-mobile">Portfolio</div>
              <h3 className="project-tech-stack">Portfolio</h3>
              <h4 className="project-tech-stack-details">
                JavaScript | React | CSS
              </h4>
            </div>
            <div className="project-right">
              <div className="project-links-container">
                <button className="project-btn live">
                  <span className="btn-text">Live site</span>
                  <div className="btn-mask"></div>
                </button>
                <button className="project-btn live">
                  <span className="btn-text">GitHub</span>
                  <div className="btn-mask"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project-description-container portfolio">
          <div className="project-connector"></div>
          <div className="project-description">
            <h2 className="project-description-header">Main takeaways:</h2>
            <ul className="project-description-items">
              <li className="project-description-item">
                Used <b>mobile first</b> approach when started designing the
                site.
              </li>
              <li className="project-description-item">
                Advanced usage of <b>pseudo-elements</b> and{" "}
                <b>pseudo-classes</b> in CSS.
              </li>

              <li className="project-description-item">
                Practiced how to configure a custom domain and add <b>SSL</b> to
                the site.
              </li>
              <li className="project-description-item">
                Optimizing the site's performance by using chrome's{" "}
                <b>Lighthouse</b> features and recommendations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
