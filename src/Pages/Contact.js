import { useState, useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
// import "./basic.css";
import { FiMail } from "react-icons/fi";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Contact() {
  const name = useRef("");
  const subject = useRef("");
  const email = useRef("");
  const message = useRef("");

  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      `mailto:${"anandtanishqs@gmail.com"}?subject=${
        subject.current.value
      }&body=${name.current.value}, ${email.current.value}: ${
        message.current.value
      }`
    );
  };

  return (
    <div className="bg-opacity-0 h-screen text-white">
      <Navbar className="z-2" />
      <div className="pt-[55px] w-full h-full z-6 " style={{ top: 58 }}>
        {/* {blogs.map((blog) => { */}
        {/* return ( */}
        <div className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
          <div
            className="lg:w-full bg-white shadow-2xl z-20 flex flex-col  lg:flex-row  bg-opacity-10 rounded-3xl overflow-hidden max-w-xl w-full  m-4 lg:m-6"
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="lg:w-full py-8 px-4 lg:px-6  bg-opacity-10 flex flex-col w-full "
              style={{
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="w-full flex flex-1 lg:w-full">
                <div className="w-full lg:w-full h-auto">
                  <div className="mt-150 lg:w-full w-full flex items-center justify-between ">
                    <span>
                      <h1>Name</h1>
                    </span>
                    <TextField
                      className="mt-150 lg:w-[300px] md:w-[200px] "
                      inputRef={name}
                      type="text"
                      label="Name"
                      multiline
                      rows={1}
                      // maxRows={1}
                      name="Name"
                      style={{ marginTop: 10 }}
                      placeholder="Name"
                      variant="outlined"
                    />
                    {/* <button onClick={() => console.log(name.current.value)}>
                      Submit
                    </button> */}
                  </div>
                  <div className="mt-150 lg:w-full w-full flex items-center justify-between ">
                    <span>
                      <h1>Email</h1>
                    </span>
                    <TextField
                      className="mt-150 lg:w-[300px] md:w-[200px] "
                      inputRef={email}
                      type="email"
                      multiline
                      rows={1}
                      label="Email"
                      name="Email"
                      style={{ marginTop: 10 }}
                      placeholder="Email"
                      variant="outlined"
                    />
                  </div>
                  <div className="mt-150 lg:w-full w-full flex items-center justify-between ">
                    <span>
                      <h1>Subject</h1>
                    </span>
                    <TextField
                      className="mt-150 lg:w-[300px] md:w-[200px] "
                      inputRef={subject}
                      type="text"
                      multiline
                      rows={1}
                      label="Subject"
                      name="Subject"
                      placeholder="Subject"
                      variant="outlined"
                      style={{ marginTop: 10 }}
                    />
                  </div>
                  <div className="mt-150 pb-8 lg:w-full w-full flex items-center justify-between ">
                    <span className="mr-250">
                      <h1>Message</h1>
                    </span>
                    <TextField
                      className="mt-150 lg:w-[300px] md:w-[200px] "
                      inputRef={message}
                      multiline
                      rows={3}
                      // fullWidth
                      style={{ width: "2230", maxWidth: "50" }}
                      rowsMax={Number.MAX_SAFE_INTEGER}
                      type="text"
                      label="Message"
                      name="Message"
                      placeholder="Message"
                      style={{ marginTop: 10 }}
                      variant="outlined"
                    />
                  </div>
                  <div className="w-full lg:mt-50 flex items-center flex-1 justify-center ">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClick}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      </div>
    </div>
  );
}

export default Contact;
