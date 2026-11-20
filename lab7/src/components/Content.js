import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstClicks: 0,
      secondClicks: 0,
    };
  }

  handleFirstHobbyClick = () => {
    this.setState((prevState) => ({
      firstClicks: prevState.firstClicks + 1,
    }));
  };

  handleSecondHobbyClick = () => {
    this.setState((prevState) => ({
      secondClicks: prevState.secondClicks + 1,
    }));
  };

  getFirstHobbyClass() {
    const { firstClicks } = this.state;
    if (firstClicks === 0) return "";
    return firstClicks % 2 === 1 ? "click-1-blue" : "click-2-yellow";
  }

  getSecondHobbyClass() {
    const { secondClicks } = this.state;
    if (secondClicks === 0) return "";
    return secondClicks % 2 === 1 ? "click-1-green" : "click-2-yellow";
  }

  render() {
    return (
      <main>
        <p>Дата народження: 12.10.2006, місце народження: м. Харків, Україна.</p>

        <p>
          Освіта: ліцей "Вересень" м. Харків (2013-2024); Національний технічний
          університет України «Київський політехнічний інститут імені Ігоря
          Сікорського», факультет ФІОТ, спеціальність Комп’ютерна інженерія (з
          2024 року).
        </p>

        <h3>Хобі</h3>
        <ul>
          <li
            id="hobby-1"
            className={this.getFirstHobbyClass()}
            onClick={this.handleFirstHobbyClick}
          >
            Програмування
          </li>
          <li
            className={`hobby-2 ${this.getSecondHobbyClass()}`}
            onClick={this.handleSecondHobbyClick}
          >
            Відео ігри
          </li>
          <li>Подорожі</li>
          <li>Аніме</li>
          <li>Бокс</li>
        </ul>

        <h3>Улюблені серіали</h3>
        <ol>
          <li>Гра престолів</li>
          <li>Краще дзвоніть Солу</li>
          <li>Breaking Bad</li>
        </ol>

        <h3>Моє улюблене місто</h3>
        <p>
          Найбільше мені подобається місто Харків. Харків вирізняється своїми
          масштабними доглянутими парками і знаковим архітектурним
          конструктивізмом на чолі з Держпромом та майданом Свободи.
        </p>
      </main>
    );
  }
}

export default Content;