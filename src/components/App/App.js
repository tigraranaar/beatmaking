import cardImage1 from '../../assets/images/card-1.jpg';
import cardImage2 from '../../assets/images/card-2.jpg';
import cardImage3 from '../../assets/images/card-3.jpg';
import Soundcloud from '../Soundcloud/Soundcloud';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import Card from '../Card/Card';
import Form from '../Form/Form';
import Slide from '../Slide/Slide';
import './App.scss';

const cards = [
  {
    imageURL: cardImage1,
    price: 19,
    features: [
      "Untagged Mp3",
      "Instant Delivery",
      "Must Credit 'PROD. BY TIGRARANAAR'"
    ]
  }, 
  {
    imageURL: cardImage2,
    price: 39,
    features: [
      "Untagged Mp3 + Wav",
      "Instant Delivery",
      "Must Credit 'PROD. BY TIGRARANAAR'"
    ]
  },
  {
    imageURL: cardImage3,
    price: 55,
    features: [
      "Untagged Mp3 + Wav + Stems",
      "Instant Delivery",
      "Exclusive Rights"
    ]
  }
];

function App() {
  return (
    <div className="App">
      <div id="home"></div>
      <Slide />

      <div className="container">
        <div id="instrumentals"></div>
        <Title title="instrumentals" subtitle="listen" />
        <Soundcloud />

        <div id="buy"></div>
        <Title title="info" subtitle="licensing" />
        <div className="cards">
          {cards.map((card) => (
            <Card key={card.imageURL + `id`} {...card} />
          ))}
        </div>

        <Title title="INSTRUMENTAL" subtitle="How To Order" />
        <p className="order__paragraph">
          I understand many people wanting to get their new and unique 
          beat, so you can tell me what you prefer. To order a new beat, 
          or buy the existing one, please fill in the form below.
        </p>
      </div>

      <div id="contact"></div>
      <div className="touch">
        <div className="container">
          <Title title="GET IN TOUCH" subtitle="See what`s new" />
          <Form />
        </div>
      </div>
   
      <div className="container">
        <Footer />
      </div> 
    </div>
  );
}

export default App;
