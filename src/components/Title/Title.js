import './Title.scss';

function Title(props) {
  return (
    <div 
      className={props.large ? 'titlebox titlebox-large' : 'titlebox'}
    >
      <h4 className="titlebox__subtitle">{props.subtitle}</h4>
      <h2 className="titlebox__title">{props.title}</h2>
    </div>
  );
}

export default Title;
