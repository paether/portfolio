import { useRef, useEffect } from "react";

export default function Contact({ language }) {
  const emailRef = useRef(null);
  const cardRef = useRef(null);
  const handleCopytoClipboard = () => {
    navigator.clipboard.writeText("petersocial@icloud.com");

    emailRef.current.classList.add("copied");

    setTimeout(() => {
      emailRef.current.classList.remove("copied");
    }, 2000);
  };

  // useEffect(() => {
  //   const mouseMove = (evt) => {
  //     const x = (evt.clientX - cardRect.left) / cardRect.width;
  //     const dx = -(x - 0.5);
  //     const dxNorm = Math.min(Math.max(dx, -0.5), 0.5);
  //     const y = (evt.clientY - cardRect.top) / cardRect.height - 0.5;

  //     cardRef.current.style.transform = `perspective(1000px) rotateY(${
  //       dxNorm * 35
  //     }deg) rotateX(${y * 35}deg) `;
  //   };
  //   const cardRect = cardRef.current.getBoundingClientRect();

  //   cardRef.current.addEventListener("mousemove", (e) => mouseMove(e));
  // }, []);

  return (
    <section id="contact" className="contact-container">
      <div className="contact-header-container">
        <h1 className="contact-header">Contact</h1>
        <div className="contact-header-line"></div>
      </div>

      <div className="card" ref={cardRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="14"
          viewBox="0 0 54 14"
        >
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle
              cx="6"
              cy="6"
              r="6"
              fill="#FF5F56"
              stroke="#E0443E"
              strokeWidth=".5"
            ></circle>
            <circle
              cx="26"
              cy="6"
              r="6"
              fill="#FFBD2E"
              stroke="#DEA123"
              strokeWidth=".5"
            ></circle>
            <circle
              cx="46"
              cy="6"
              r="6"
              fill="#27C93F"
              stroke="#1AAB29"
              strokeWidth=".5"
            ></circle>
          </g>
        </svg>
        <div className="card-data">
          <code>
            <div>
              {" "}
              <span className="variable">const </span>
              <span className="function">contact </span>
              <span className="operator">= </span>
              <span>{"{"}</span>
            </div>

            <div className="indent">
              {" "}
              <span className="property">name</span>
              <span className="operator">: </span>
              <span className="string">'Horváth Péter'</span>
              <span>,</span>
            </div>
            <div className="indent">
              {" "}
              <span className="property">email</span>
              <span className="operator">: </span>
              <span
                className="string email"
                ref={emailRef}
                onClick={handleCopytoClipboard}
              >
                'petersocial@icloud.com'
              </span>
              <span>,</span>
            </div>
            <div className="indent">
              {" "}
              <span className="property">linkedIn</span>
              <span className="operator">: </span>
              <span className="string">
                <a
                  href="https://linkedin.com/in/paether"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  'linkedin.com/in/paether'
                </a>
              </span>
              <span>,</span>
            </div>
            <div className="indent">
              {" "}
              <span className="property">gitHub</span>
              <span className="operator">: </span>
              <span className="string">
                <a
                  href="https://github.com/paether"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  'github.com/paether'
                </a>
              </span>
              <span>,</span>
            </div>
            <div className="indent">
              {" "}
              <span className="property">website</span>
              <span className="operator">: </span>
              <span className="string">'paether.dev'</span>
              <span>,</span>
            </div>

            <span>{"};"}</span>
          </code>
        </div>
      </div>
    </section>
  );
}
