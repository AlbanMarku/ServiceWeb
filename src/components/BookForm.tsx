/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import '../styles/bookForm.css';

export default function BookForm() {
  // const greetings = `Hi! I would like to book the ${service} service. What would my quote be for the following:`;

  return (
    <div className="BookForm">
      <form id="contact-form" name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="Section">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="Section">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="Section">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <div className="Section">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
