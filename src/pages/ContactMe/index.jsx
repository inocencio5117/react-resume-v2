/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-console */
import { React, useState } from "react";

import { sendForm } from "emailjs-com";

import validator from "validator";

import { toast, ToastContainer } from "react-toastify";
import { ContactContainer } from "./styled";

import "react-toastify/dist/ReactToastify.css";

export function ContactMe() {
  let validForm = false;
  // const emailSent = false;

  function sendEmail(e) {
    e.preventDefault();

    if (!validForm) {
      toast.error("Não foi possível enviar o email");
      return;
    }

    sendForm(
      "service_01ekpah",
      "template_c5msajr",
      e.target,
      "user_G47bsnVqbjCrZkq7H9nRj"
    ).then(
      (result) => {
        console.log(result.text);

        if (result.text === "OK") {
          toast.success("E-mail sent successfully!");
        } else {
          toast.error("Oops. An error may have occurred");
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentError, setContentError] = useState("");

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
      validForm = true;
    } else {
      setEmailError("Insira um email válido");
      validForm = false;
    }
  };

  const validateName = (e) => {
    const name = e.target.value;

    if (name === "") {
      setNameError("O campo nome não pode estar vazio");
      validForm = false;
    } else {
      setNameError("");
      validForm = true;
    }
  };

  const validateSubject = (e) => {
    const subject = e.target.value;

    if (subject === "") {
      setSubjectError("Assunto não pode estar vazio");
      validForm = false;
    } else {
      setSubjectError("");
      validForm = true;
    }
  };

  const validateContent = (e) => {
    const content = e.target.value;

    if (content === "") {
      setContentError("Conteúdo não pode estar vazio");
      validForm = false;
    } else {
      setContentError("");
      validForm = true;
    }
  };

  // const clearInputs = (e) => {
  //   if (emailSent) {
  //     e.target.value = "";
  //     emailSent = false;
  //   }
  // };

  return (
    <ContactContainer>
      <h3>Contact Me</h3>

      <form onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="NOME"
          name="user_name"
          onChange={(e) => validateName(e)}
        />
        {nameError !== "" ? <span className="error">{nameError}</span> : null}
        <input
          type="text"
          placeholder="EMAIL"
          name="user_email"
          onChange={(e) => validateEmail(e)}
        />
        {emailError !== "" ? <span className="error">{emailError}</span> : null}
        <input
          type="text"
          placeholder="ASSUNTO"
          name="subject"
          onChange={(e) => validateSubject(e)}
        />
        {subjectError !== "" ? (
          <span className="error">{subjectError}</span>
        ) : null}
        <textarea
          name="message"
          id="content"
          cols="30"
          rows="10"
          placeholder="CONTEÚDO"
          onChange={(e) => validateContent(e)}
        />
        {contentError !== "" ? (
          <span className="error">{contentError}</span>
        ) : null}

        <button type="submit">ENVIAR</button>
        <ToastContainer />
      </form>
    </ContactContainer>
  );
}
