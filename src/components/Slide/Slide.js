import Title from '../Title/Title';
import Header from '../Header/Header';
import './Slide.scss';

function Slide() {
  return (
    <div className="slide">
      <Header />
      <Title title="tigraranaar" subtitle="beatmaking by" large={true}/>
      <div className="wrapper"></div>
    </div>
  );
}

export default Slide;
