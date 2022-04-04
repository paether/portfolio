import { useRef } from "react";

export default function Contact({ language }) {
  const emailRef = useRef(null);
  const handleCopytoClipboard = () => {
    navigator.clipboard.writeText("petersocial@icloud.com");

    emailRef.current.classList.add("copied");

    setTimeout(() => {
      emailRef.current.classList.remove("copied");
    }, 2000);
  };
  return (
    <section id="contact" className="contact-container">
      <div className="contact-header-container">
        <h1 className="contact-header">Contact</h1>
        <div className="contact-header-line"></div>
      </div>

      <div className="card">
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
          {/* <div className="line-numbers">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div> */}
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
        {/* <div className="card-front">
          <div className="line-numbers">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
          <code>
            <span className="variable">this</span>
            <span>.</span>
            <span className="method">addEventListener</span>
            <span>{"("}</span>
            <span className="string">'mouseover'</span>
            <span>, </span>
            <span className="function">{"() => "}</span>
            <span>{"{ "}</span>
            <div className="indent">
              <span className="variable">this</span>
              <span>.</span>
              <span className="property">flipCard </span>
              <span>= </span>
              <span className="boolean">true</span>
              <span>;</span>
            </div>
            <span>{"});"}</span>
          </code>
        </div> */}
      </div>
      {/* <div className="contact-details-container">
        <div className="contact-detail">
          <a
            href="https://linkedin.com/in/paether"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="linkedin">LinkedIn</div>
            <svg viewBox="0 0 128 128" className="footer-icon">
              <path
                fill="#0076b2"
                d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
              ></path>
              <path
                fill="#fff"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="contact-detail">
          <a
            href="https://linkedin.com/in/paether"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="linkedin">GitHub</div>
            <svg viewBox="0 0 128 128" className="footer-icon">
              <path
                fill="#0076b2"
                d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
              ></path>
              <path
                fill="#fff"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              ></path>
            </svg>
          </a>
        </div>
      </div> */}
    </section>
  );
}
