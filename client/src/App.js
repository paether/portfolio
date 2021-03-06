import { useEffect, useRef } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Intro/Introduction";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {
  const aboutNav = useRef(null);
  const projectsNav = useRef(null);
  const contactNav = useRef(null);

  let sections;
  let reveals;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sections = document.querySelectorAll("section[id]");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    reveals = document.querySelectorAll(".reveal");

    function navHighlighter() {
      let scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute("id");
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
          if (!reveals[i].classList.contains("active")) {
            reveals[i].classList.add("active");
            const descClass = reveals[i].dataset.project;
            const descElement = document.querySelector("." + descClass);
            reveals[i].addEventListener("transitionend", () => {
              descElement.classList.add("desc-active");
            });
          }
        }
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
      <Navbar {...{ aboutNav, projectsNav, contactNav }} />
      <Introduction />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
