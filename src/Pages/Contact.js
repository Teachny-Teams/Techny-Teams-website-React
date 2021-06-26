import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./basic.css";
import { FiMail } from "react-icons/fi";

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // console.log(data);

  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      `mailto:${"anandtanishqs@gmail.com"}?subject=${subject}&body=${name}: ${message}`
    );
  };
  return (
    <div className="bg-opacity-0">
      <Navbar className="z-2" />
      <div className="pt-[55px] w-full h-full z-6  " style={{ top: 58 }}>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1 className="flex m-3 items-center">
                <FiMail size={50} />
                <i style={{marginLeft:15}}>Get In Touch.</i>
              </h1>
            </div>

            {/* <div className="ten columns">
              <p className="lead"> </p>
            </div> */}
          </div>

          <div className="row">
            <section className="eight columns">
              <form id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      value={name}
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      value={email}
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      value={subject}
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={handleClick}
                      className="submit"
                    >
                      Submit
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
