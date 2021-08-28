/* eslint-disable no-console */
import { React } from 'react';

import { sendForm } from 'emailjs-com';

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

  return (
    <ContactContainer>
      <h3>Contact Me</h3>

      <form onSubmit={sendEmail}>
        <input type="text" placeholder="NAME" name="user_name" />
        <input type="text" placeholder="EMAIL" name="user_email" />
        <input type="text" placeholder="SUBJECT" name="subject" />
        <textarea name="message" id="content" cols="30" rows="10" placeholder="CONTENT" />

        <button type="submit">SEND</button>
        <ToastContainer />
      </form>
    </ContactContainer>
  );
}
