/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import Button from 'react-bootstrap/Button';

export default function BookForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="BookForm">
      <form name="contact v1" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
        <label>
          Your Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}
