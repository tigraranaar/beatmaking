import './Form.scss';

function Form() {
  return (
    <form action="#" method="post" className="form">
      <input type="text" className="form__name" placeholder="Name" />
      <input type="email" className="form__email" id="email" placeholder="E-mail" />
      <input type="text" className="form__subject" id="subject" placeholder="Subject" />
      <textarea className="form__message" cols="30" rows="10" placeholder="Message"></textarea>
      <button className="form__button" type="submit">Send</button>
    </form>
  );
}

export default Form;
