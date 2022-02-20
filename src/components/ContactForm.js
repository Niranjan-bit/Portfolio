import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3pywihb',
        'template_32z8aj4',
        e.target,
        'user_5BzKNj51HJt8ohOcCljy4'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <FormStyle>
      <form onSubmit={sendEmail} className="row">
        <h1>Name</h1>
        <input
          type="text"
          name="name"
          id="new-todo-input"
          className="form-control"
          style={{ fontSize: '20px' }}
        />
        <h1>Email</h1>
        <input
          type="email"
          name="user_email"
          className="form-control"
          style={{ fontSize: '20px' }}
        />
        <h1>Message</h1>
        <textarea
          name="message"
          rows="4"
          className="form-control"
          style={{ fontSize: '20px' }}
        />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: '30px', fontSize: '25px' }}
        />
      </form>
    </FormStyle>
  );
};

export default Mailer;
