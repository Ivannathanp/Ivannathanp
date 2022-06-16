import React, { useState, useEffect, useRef } from "react";
import { Button } from "../components/Button/Button";
import { Link } from "react-router-dom";
import CardItems from "../components/Cards/CardItems";
import "../components/Cards/Cards.css";
import "../App.css";
import "../pages/project/sections.css";
import ProfilePicture from "../components/images/Profile.png";
import Exp4 from "../components/images/exp4.png";
import Exp1 from "../components/images/exp1.png";
import Exp2 from "../components/images/exp2.png";
import Exp3 from "../components/images/exp3.png";
import Unix from "../components/images/Unix.png";
import Shop from "../components/images/Shopscut.png";
import Tomb from "../components/images/Tombraider.jpg";
import Indonesia from "../components/images/Exploreindonesia.png";
import Contacts from "../components/images/contact.png";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "../components/Form/FormLib";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { ThreeDots } from "react-loader-spinner";
import Navbar from "../components/Navbar/Navbar";
import Cards from "../components/Cards/Cards";

function Home() {
  const form = useRef();
  const [error, setError] = useState(false);
  const [messages, setMessages] = useState();
  const [notif, setNotif] = useState(false);

  function handleSubmit(values) {
    setNotif(true);
    setTimeout(() => {
      setNotif(false);
    }, 3000);
    setMessages("");
    console.log(process.env.REACT_APP_PUBLIC_KEY);
    emailjs
      .sendForm(
        process.env.REACT_APP_USER_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((error) => {
        alert("An error occurred, Please try again", error.text);
      });
  }

  return (
    <>
      <Navbar />
      <div className="scrollcontainer" id="containerElement">
        <div className="hero-container" id="home">
          <h1>Welcome</h1>
        </div>

        {/*About*/}
        <div id="about" className="aboutsection">
          <div className="aboutRow">
            <div className="leftColumn">
              <figure className="ProfilePicture">
                <img src={ProfilePicture} className="image" />
              </figure>
            </div>
            <div className="rightColumn">
              <h1 className="aboutTitle">Hi There, I'm</h1>
              <p className="aboutSubTitle">Ivan Nathan Parmenas</p>
              <br></br>
              <h2 className="heading">About Me</h2>
              <p className="aboutBody">
                I am highly organized, passionate, and responsible for the task
                I have been entrusted with. Currently, I am in my last year
                studying Computer Science and Engineering in South China
                University of Technology where I have been involved in a
                part-time job, and team projects such as computer fps game,
                android money management app, website development, and SQL
                Database. I am seeking a job opportunity to put my knowledge and
                experience in practice, and enhance my skills.
              </p>
              <Link to="/About" className="aboutlinks">
                <Button
                  className="aboutButton"
                  buttonStyle="button--More"
                  buttonSize="button--Medium"
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> More about me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/*Experience*/}
        <div id="works" className="expsection">
          <h2 className="centerheading">Experiences</h2>
          <div className="exp">
            <div className="exp1">
              <div className="contentcenter">
                <div className="logocontainer">
                  <img src={Exp4} className="logo" />
                </div>
                <div className="details">
                  <h2 className="heading">Sinar Mas Land</h2>
                  <h3>September 2021 - June 2022</h3>
                  <h4>Position: Full Stack Web Developer</h4>
                </div>
              </div>
            </div>
            <div className="exp1">
              <div className="contentcenter">
                <div className="logocontainer">
                  <img src={Exp1} className="logo" />
                </div>
                <div className="details">
                  <h2 className="heading">
                    Perhimpunan Pelajar Indonesia di Tiongkok
                  </h2>
                  <h3>September 2020 - July 2021</h3>
                  <h4>Position: Deputy Head of Graphics</h4>
                </div>
              </div>
            </div>
            <div className="exp1">
              <div className="contentcenter">
                <div className="logocontainer">
                  <img src={Exp2} className="logo" />
                </div>
                <div className="details">
                  <h2 className="heading">
                    SCUT's International Student Union
                  </h2>
                  <h3>September 2019 - present</h3>
                  <h4>Position: Head of Multimedia and IT</h4>
                </div>
              </div>
            </div>
            <div className="exp1">
              <div className="contentcenter">
                <div className="logocontainer">
                  <img src={Exp3} className="logo" />
                </div>
                <div className="details">
                  <h2 className="heading">NetEase YouDao (网易有道)</h2>
                  <h3>June 2019 - September 2020</h3>
                  <h4>Position: Translator and transcriber</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Projects*/}
        <div id="projects" className="projectsectionmore">
          <h2 className="centerheading">Projects</h2>
          <Cards />
        </div>

        {/*Contacts*/}
        <div id="contact" className="contactsection">
          <div className="contactRow">
            <div className="contactleftColumn">
              <img src={Contacts} className="image" />
            </div>
            <div className="contactrightColumn">
              <h1 className="contactTitle">Contact Me</h1>
              <Formik
                initialValues={{
                  user_email: "",
                  user_name: "",
                }}
                validationSchema={Yup.object().shape({
                  user_email: Yup.string()
                    .email("Invalid e-mail address")
                    .required("Required"),
                  user_name: Yup.string().required("Required"),
                })}
                onSubmit={(values, { resetForm }) => {
                  handleSubmit(values);
                  resetForm();
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form ref={form} className="formik">
                    <TextField
                      name="user_email"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <TextField
                      name="user_name"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                    <FormControl error={error}>
                      <textarea
                        name="message"
                        className="textarea"
                        placeholder="Message"
                        value={messages}
                        onChange={(e) => {
                          setMessages(e.target.value);
                          setError(false);
                        }}
                      ></textarea>
                      {error && (
                        <FormHelperText className="selecterror">
                          Please type a message
                        </FormHelperText>
                      )}
                    </FormControl>
                    {notif ? (
                      <div className="notificationText">
                        {" "}
                        Thank you for contacting me!
                      </div>
                    ) : (
                      <button
                        className="sendbutton"
                        type="submit"
                        onClick={() => {
                          if (messages == null) {
                            setError(true);
                          }
                        }}
                      >
                        Send
                      </button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        {/* <div className="contactsection">
        <div className="contactwrapper">
          <div className="contactsection">
            <h2 className="contactSubTitle">Contact Details</h2>
            <p className="SmallSpacing" />
            <p className="contactSubTitle">
              {" "}
              <i className="fa fa-phone" /> Phone : +62 89638303065
            </p>
            <p className="SmallSpacing" />
            <p className="contactSubTitle">
              {" "}
              <i className="fa fa-inbox" /> Email : ivanparmenas@gmail.com{" "}
            </p>
            <p className="SmallSpacing" />
          </div>
          <div className="contactsection">
            <p className="contactSubTitle"> Social Media </p>
            <p className="contactSubTitle">
              <i className="fab fa-line" /> Line : ivannathanparmenas
            </p>
            <p className="contactSubTitle">
              <i className="fab fa-instagram" /> Instagram: ivan_nathan1
            </p>
          </div>
        </div>
      </div> */}
        <div className="footer-container">
          <section class="social-media">
            <div class="social-media-wrap">
              <small class="website-rights">
                Made by Ivan Nathan Parmenas © 2022
              </small>
              <div class="social-icons">
                <Link
                  class="social-icon-link instagram"
                  to={{ pathname: "https://www.instagram.com/ivan_nathan1/" }}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  class="social-icon-link whatsapp"
                  to={{ pathname: "https://wa.me/6289638303065" }}
                  target="_blank"
                  aria-label="Whatsapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
                <Link
                  class="social-icon-link linkedin"
                  to={{ pathname: "www.linkedin.com/in/ivannathanp99" }}
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
