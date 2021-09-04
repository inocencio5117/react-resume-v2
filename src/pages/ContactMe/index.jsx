/* eslint-disable no-console */
import { React, useState } from 'react';

import { sendForm } from 'emailjs-com';

import validator from 'validator';

import { toast, ToastContainer } from 'react-toastify';
import { ContactContainer } from './styled';

import 'react-toastify/dist/ReactToastify.css';

export function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    sendForm('service_01ekpah', 'template_c5msajr', e.target, 'user_G47bsnVqbjCrZkq7H9nRj')
      .then((result) => {
        console.log(result.text);

        if (result.text === 'OK') {
          toast.success('E-mail sent successfully!');
        } else {
          toast.error('Oops. An error may have occurred');
        }
      }, (error) => {
        console.log(error.text);
      });
  }

  const [emailError, setEmailError] = useState('');
  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  return (
    <ContactContainer>
      <h3>Contact Me</h3>

      <form onSubmit={sendEmail}>
        <input type="text" placeholder="NAME" name="user_name" />
        <input type="text" placeholder="EMAIL" name="user_email" onChange={(e) => validateEmail(e)} />
        {emailError !== '' ? <span className="error">{emailError}</span> : null}
        <input type="text" placeholder="SUBJECT" name="subject" />
        <textarea name="message" id="content" cols="30" rows="10" placeholder="CONTENT" />

        <button type="submit">SEND</button>

        <ToastContainer />
      </form>
    </ContactContainer>
  );
}
