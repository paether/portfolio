import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const aboutNav = useRef(null);
  const projectsNav = useRef(null);
  const contactNav = useRef(null);
  let sections;
  let reveals;

  //A request is sent to make sure by the time someone clicks on the project Heroku starts the server.
  //These projects are hosted free on Heroku so they put them on sleep after a period of time.
  // (async () => {
  //   try {
  //     const getSite = await axios.get(
  //       "https://paether-wishlistapp.herokuapp.com/"
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })();

  useEffect(() => {
    sections = document.querySelectorAll("section[id]");
    reveals = document.querySelectorAll(".reveal");

    function navHighlighter() {
      let scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute("id");
        //compare
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          switch (sectionId) {
            case "about":
              aboutNav.current.classList.add("active");
              break;
            case "projects":
              projectsNav.current.classList.add("active");
              break;
            case "contact":
              contactNav.current.classList.add("active");
              break;
            default:
              break;
          }
        } else {
          switch (sectionId) {
            case "about":
              aboutNav.current.classList.remove("active");
              break;
            case "projects":
              projectsNav.current.classList.remove("active");
              break;
            case "contact":
              contactNav.current.classList.remove("active");
              break;

            default:
              break;
          }
        }
      });
    }
    function reveal() {
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          //  reveals[i].classList.remove("revealed");
        }
        // else if (reveals[i].classList.contains("active")) {
        //    reveals[i].classList.remove("active");
        //   reveals[i].classList.add("revealed");
        // }
      }
    }
    window.addEventListener("scroll", () => {
      reveal();
      navHighlighter();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        reveal();
        navHighlighter();
      });
    };
  }, []);

  return (
    <div className="main-container">
      {/* <Particles options={particlesOptions} /> */}
      <Navbar {...{ aboutNav, projectsNav, contactNav }} />
      <Introduction />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
