import React, {useState, useRef} from "react";
import { isValidEmail } from "../../utils/helpers/helpers";
import emailjs from 'emailjs-com';

function Contact() {

    const form = useRef();

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = isValidEmail(event.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } 
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!event.target.value.length) {
              setErrorMessage(`${event.target.name} is required.`);
            } 
            else {
              setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
    }

    const sendEmail = (event) =>  {
      event.preventDefault();

      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(response => console.log(response))
      .then(error => console.log(error));
    }

    // JSX
    return (
        <section>
          <h1 data-testid='h1tag'>Contact Me</h1>
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit" data-testid='buttontag'>Submit</button>
          </form>
        </section>
    );
}

export default Contact;