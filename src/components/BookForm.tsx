/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */

export default function BookForm() {
  return (
    <div className="BookForm">
      <form id="contact-form" name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </p>
      </form>
    </div>
  );
}
