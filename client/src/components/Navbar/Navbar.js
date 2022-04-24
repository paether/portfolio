import { useRef, useEffect } from "react";

let prevScroll;

export default function Navbar({ aboutNav, projectsNav, contactNav }) {
  const headerNavRef = useRef(null);
  const dropDownNavRef = useRef(null);
  const headerRef = useRef(null);
  const hamburger = useRef(null);
  const logoRef = useRef(null);
  const navCheckBoxRef = useRef(null);

  const toggleNav = () => {
    if (navCheckBoxRef.current.checked) {
      document.body.style.overflow = "hidden";
      dropDownNavRef.current.setAttribute("data-visible", true);
    } else {
      dropDownNavRef.current.setAttribute("data-visible", false);
      document.body.style.overflow = "scroll";
      if (
        headerRef.current.style.top !== "0px" &&
        headerRef.current.style.top !== ""
      ) {
        hamburger.current.style.setProperty(
          "top",
          "calc(-4rem - 40px)",
          "important"
        );
      }
    }
  };

  const handleNavVisibility = () => {
    let currentScrollPos = window.pageYOffset;
    if (window.pageYOffset < 50) return;
    if (prevScroll > currentScrollPos) {
      headerRef.current.style.top = "0";
      hamburger.current.style.top = "11px";
    } else {
      headerRef.current.style.top = "calc(-4rem - 40px)";
      if (dropDownNavRef.current.getAttribute("data-visible") === "false") {
        hamburger.current.style.setProperty(
          "top",
          "calc(-4rem - 40px)",
          "important"
        );
      }
    }
    prevScroll = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavVisibility);
  }, []);

  function removeTransition(e) {
    if (!e.target.classList.contains("text_shadows")) return;
    e.target.classList.remove("active");
  }

  function shadow(e) {
    e.target.classList.add("active");
  }

  useEffect(() => {
    let logo = logoRef.current;
    logo.addEventListener("mouseover", shadow);
    logo.addEventListener("animationend", removeTransition);

    return () => {
      logo.removeEventListener("mouseover", shadow);
      logo.removeEventListener("animationend", removeTransition);
    };
  }, []);

  return (
    <>
      <section className="header-container" ref={headerRef}>
        <div className="logo" ref={logoRef}>
          <h2 className="text_shadows">P</h2>
        </div>
        <ul className="menu-item-container" ref={headerNavRef}>
          <li>
            <a ref={aboutNav} className="about active" href="#about">
              About
            </a>
          </li>
          <li>
            <a ref={projectsNav} className="projects" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a ref={contactNav} className="contact" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </section>
      <input
        ref={navCheckBoxRef}
        onChange={toggleNav}
        type="checkbox"
        id="ham-menu"
      />
      <label htmlFor="ham-menu" ref={hamburger}>
        <div className="hide-des">
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </div>
      </label>

      <ul
        data-visible="false"
        className="dropdown-item-container"
        ref={dropDownNavRef}
      >
        <li className="active-menu">
          <a onClick={() => navCheckBoxRef.current.click()} href="#about">
            <span className="menu-item">About</span>
          </a>
        </li>
        <li>
          <a onClick={() => navCheckBoxRef.current.click()} href="#projects">
            <span className="menu-item">Projects</span>
          </a>
        </li>
        <li>
          <a onClick={() => navCheckBoxRef.current.click()} href="#contact">
            <span className="menu-item">Contact</span>
          </a>
        </li>
      </ul>
    </>
  );
}
