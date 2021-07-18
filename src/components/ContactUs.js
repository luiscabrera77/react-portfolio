import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
      }
    };

    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };

    return (
      <section id="contact">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Contact</span></h1>
            </div>
            <div className="ten columns flex-container">
              <br></br>
              <form className="contact" id="contact-form" onSubmit={handleSubmit}>
                <div>
                  <input type="text" name="name" defaultValue={name} placeholder="Your Name" onBlur={handleChange}/>
                </div>
                <div>
                  <input type="email" name="email" defaultValue={email} placeholder="Your Email" onBlur={handleChange}/>
                </div>
                <div>
                  <textarea name="message" rows="5" defaultValue={message} placeholder="Your Message" onBlur={handleChange}/>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
                {errorMessage && (
                  <div>
                    <p className="alert">{errorMessage}</p>
                  </div>
                )}
              </form>
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}

      </section>
    );
  }

export default ContactForm;