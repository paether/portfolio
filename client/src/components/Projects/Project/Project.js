export default function Project({
  slideInPosition,
  techStackDetails,
  projectClassName,
  projectName,
  liveSite,
  gitHub,
  projectDescriptionItems,
}) {
  return (
    <>
      <div
        data-project={projectClassName}
        className={"project reveal " + slideInPosition}
      >
        <div className="project-mask-number">
          <div className="project-mask-number-back">{projectName}</div>
          <div className="project-mask-number-front">
            <div
              data-index={projectName}
              className="project-mask-number-overlay"
            >
              {projectName}
            </div>
          </div>
        </div>
        <div className="project-details-container">
          <div className="project-left">
            <h3 className="project-tech-stack">{projectName}</h3>
            <h4 className="project-tech-stack-details">{techStackDetails}</h4>
          </div>
          <div className="project-right">
            <div className="project-links-container">
              {liveSite && (
                <button
                  className="project-btn live"
                  onClick={() => window.open(liveSite, "_blank")}
                >
                  <span className="btn-text">Live site</span>
                  <div className="btn-mask"></div>
                </button>
              )}

              <button
                className="project-btn live"
                onClick={() => window.open(gitHub, "_blank")}
              >
                <span className="btn-text">GitHub</span>
                <div className="btn-mask"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={"project-description-container " + projectClassName}>
        <div className="project-connector"></div>
        <div className="project-description">
          <h2 className="project-description-header">Main features:</h2>
          <ul className="project-description-items">
            {projectDescriptionItems.map((item, index) => {
              return (
                <li key={index} className="project-description-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
