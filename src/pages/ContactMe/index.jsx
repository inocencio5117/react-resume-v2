import { React } from 'react';

import { ContactContainer } from './styled';

export function ContactMe() {
  return (
    <ContactContainer>
      <h3>Contact Me</h3>

      <form>
        <input type="text" placeholder="NAME" />
        <input type="text" placeholder="EMAIL" />
        <input type="text" placeholder="SUBJECT" />
        <textarea name="content" id="content" cols="30" rows="10" placeholder="CONTENT" />
      </form>
    </ContactContainer>
  );
}
