import './Card.scss';

function Card(props) {
  return (
    <div className="card">
      <img className="card__image" src={props.imageURL} alt="beatmaking"/>
      <div className="card__wrapper">
        <h3 className="card__price">${props.price}</h3>
        <ul className="card__features">
          {props.features.map((item) => (
            <li key={item + `id`} className="card__item">{item}</li>
          ))}
        </ul>
        <button className="card__button">Select Beats</button>
      </div>
    </div>
  );
}

export default Card;
