import React from 'react';
import './message.css';

export class Message extends React.Component {
  render() {
    return(
      <div>
        <div className="overlay"></div>
        <div className="Message-Wrapper">
          <form method="POST" action="https://formspree.io/corafenice1013@gmail.com">
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
    </div>
    )
  }
}
