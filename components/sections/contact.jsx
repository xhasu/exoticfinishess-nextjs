import React, { useState, useEffect, useRef } from 'react'
import { FacebookIcon, InstagramIcon } from "components/ui/icons"

const ContactSection = () => {

  const formRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const formRefCurrent = formRef.current;

    function validateForm(event) {
      event.target.classList.add('was-validated');
      event.target.classList.add('custom-validation');
      event.preventDefault();

      if (event.target.checkValidity() === false) {
        return false;
      }

      submitContactForm();

      return true;
    }

    formRefCurrent.addEventListener('submit', validateForm);

    return () => {
      formRefCurrent.removeEventListener('submit', validateForm);
    }

  }, [name, email, subject, message])

  const submitContactForm = async () => {
    setLoading(true);

    const form = formRef.current;
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    // get json from formData entries
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 mb-12 md:mb-24">
      <div>
        <div className="rounded-md bg-primary p-8">
          <ul>
            <li>
              <a href="mailto:info@exoticfinishess.com">info@exoticfinishess.com</a>
            </li>
            <li>
              <span>USA</span>
            </li>
            <li>
              <a href="tel:+442033241234">305 767 - 9095</a>
            </li>
            <li>
              <InstagramIcon />
              <FacebookIcon />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="font-century font-bold text-2xl mb-4">Contact</h2>
        <form ref={formRef} name="contactForm" className="w-full needs-validation" autoComplete="off" noValidate>
          <div className="input-group">
            <input className="input-field" value={name} onChange={event => setName(event.target.value)} type="text" name="name" id="name" placeholder="Name" minLength={4} required />
            <div className="invalid-feedback">Name is required</div>
          </div>
          <div className="input-group">
            <input className="input-field" value={email} onChange={event => setEmail(event.target.value)} type="email" name="email" id="email" placeholder="Email" minLength={4} required />
            <div className="invalid-feedback">Email is required</div>
          </div>
          <div className="input-group">
            <input className="input-field" value={subject} onChange={event => setSubject(event.target.value)} name="subject" id="subject" placeholder="Subject" required />
            <div className="invalid-feedback">Subject is required</div>
          </div>
          <div className="input-group">
            <textarea className="input-field" value={message} onChange={event => setMessage(event.target.value)} name="message" id="message" placeholder="Message" rows={5} required />
            <div className="invalid-feedback">Message is required</div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-primary rounded-full px-8 py-1 text-center font-century font-normal text-3xl">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSection