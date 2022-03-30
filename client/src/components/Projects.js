export default function Projects() {
  return (
    <>
      {/* ul */}
      <section id="projects" className="projects-container">
        <div className="projects-header-container">
          <h1 className="projects-header">Projects</h1>
          <div className="projects-header-line"></div>
        </div>

        {/* li */}
        <div className="projects">
          {/* a */}
          <div className="project reveal left wish-list">
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
                <div className="project-name-mobile">Wish List</div>
                <h3 className="project-tech-stack">Tech stack</h3>
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
                  {/* <button className="project-btn repo">Git repo</button> */}
                </div>
              </div>
            </div>
          </div>

          {/* a */}
          <div className="project reveal right">
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
                <h3 className="project-tech-stack">Tech stack</h3>
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
          <div className="project reveal left">
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
                <h3 className="project-tech-stack">Tech stack</h3>
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
        </div>
      </section>
    </>
  );
}
