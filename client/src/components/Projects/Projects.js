import Project from "./Project/Project";
import {
  wishListText,
  shortURLText,
  portfolioText,
  chatterText,
} from "./projectTexts";

export default function Projects() {
  return (
    <section id="projects" className="projects-container">
      <div className="projects-header-container">
        <h1 className="projects-header">Projects</h1>
        <div className="projects-header-line"></div>
      </div>
      <div className="projects">
        <Project
          slideInPosition="right"
          techStackDetails="TypeScript | React | Passport | Express | socket.io | MongoDB | CSS"
          projectName="Chatter"
          projectClassName="chatter"
          gitHub="https://github.com/paether/p-chatter/"
          projectDescriptionItems={chatterText}
        />
        <Project
          slideInPosition="left"
          techStackDetails="JavaScript | React | Express | Node.js | Firebase | CSS"
          projectName="Wish List"
          projectClassName="wishlist"
          gitHub="https://github.com/paether/wish-list-app/"
          liveSite="https://paether-wishlistapp.herokuapp.com/"
          projectDescriptionItems={wishListText}
        />

        <Project
          slideInPosition="right"
          techStackDetails="JavaScript | React | Express | Node.js | MongoDB | CSS"
          projectName="Short URL"
          projectClassName="shorturl"
          gitHub="https://github.com/paether/shorturl/"
          liveSite="https://p-urls.herokuapp.com/"
          projectDescriptionItems={shortURLText}
        />
        <Project
          slideInPosition="left"
          techStackDetails="JavaScript | React | Node.js | CSS"
          projectName="Portfolio"
          projectClassName="portfolio"
          gitHub="https://github.com/paether/portfolio/"
          projectDescriptionItems={portfolioText}
        />
      </div>
    </section>
  );
}
