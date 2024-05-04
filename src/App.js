import './App.css';
import CardImage from './assets/images/cap-photo.png'

function App() {
  return (
      <div className="cardContainer">
        <div className="card">
          <div className="cardImageContainer">
            <img src={CardImage} alt="Карточка товара" />
          </div>
          <p className="cardName">drew house cap</p>
          <p className="cardPrice">$40.00</p>
          <button>add to card</button>
        </div>
        <div className="card">
          <div className="cardImageContainer">
            <img src={CardImage} alt="Карточка товара" />
          </div>
          <p className="cardName">drew house cap</p>
          <p className="cardPrice">$40.00</p>
          <button>add to card</button>
        </div>
        <div className="card">
          <div className="cardImageContainer">
            <img src={CardImage} alt="Карточка товара" />
          </div>
          <p className="cardName">drew house cap</p>
          <p className="cardPrice">$40.00</p>
          <button>add to card</button>
        </div>
      </div>
  );
}

export default App;
