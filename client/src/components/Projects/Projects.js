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
                <button
                  className="project-btn live"
                  onClick={() =>
                    window.open("https://p-urls.herokuapp.com/", "_blank")
                  }
                >
                  <span className="btn-text">Live site</span>
                  <div className="btn-mask"></div>
                </button>
                <button
                  className="project-btn live"
                  onClick={() =>
                    window.open(
                      "https://github.com/paether/shorturl/",
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
        <div className="project-description-container shorturl">
          <div className="project-connector"></div>
          <div className="project-description">
            <h2 className="project-description-header">Main takeaways:</h2>
            <ul className="project-description-items">
              <li className="project-description-item">
                A small and compact website which lets the user generate a
                shorted URL and a QR Code with it.
              </li>
              <li className="project-description-item">
                Wanted to try out how QR Code generators work and how redirects
                are handled in <b>Express</b>.
              </li>
              <li className="project-description-item">
                Implemented CSS 3D features.
              </li>
              <li className="project-description-item">
                URL is validated on server side.
              </li>
              <li className="project-description-item">Responsive layout.</li>
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
                <button
                  className="project-btn live"
                  onClick={() =>
                    window.open(
                      "https://github.com/paether/portfolio/",
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
        <div data-project="working-on" className="project reveal right">
          <div className="project-mask-number">
            <div className="project-mask-number-back">Working On</div>
            <div className="project-mask-number-front">
              <div
                data-index="Working On"
                className="project-mask-number-overlay"
              >
                Working On
              </div>
            </div>
          </div>
          <div className="project-details-container">
            <div className="project-left">
              <div className="project-name-mobile">Working On</div>
              <h3 className="project-tech-stack">Chat app</h3>
              <h4 className="project-tech-stack-details">
                JavaScript | React | Express | Node | socket.io
              </h4>
            </div>
            <div className="project-right">
              <div className="project-links-container">
                <button
                  className="project-btn live"
                  onClick={() =>
                    window.open(
                      "https://github.com/paether/p-chatter/",
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
        <div className="project-description-container working-on">
          <div className="project-connector"></div>
          <div className="project-description">
            <h2 className="project-description-header">Planned features:</h2>
            <ul className="project-description-items">
              <li className="project-description-item">
                <b>PassportJS</b> authentication with stored cookie sessions
                (implemented).
              </li>
              <li className="project-description-item">
                <b>Socket.io</b> for real time chat updates with added rooms as
                well.
              </li>

              <li className="project-description-item">
                Send friend requests and accept them.
              </li>
              <li className="project-description-item">
                Context API for state management.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
