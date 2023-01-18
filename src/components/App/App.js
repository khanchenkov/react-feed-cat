import "./App.css";
import CardList from "../CardList/CardList";

function App() {
  const data = [
    {
      id: 1,
      caption: "Сказочное заморское яство",
      title: "Нямушка",
      taste: "с фуа-гра",
      rations: 10,
      bonus: 1,
      weight: 0.5,
      description: "Печень утки разварная с артишоками.",
      selected: false,
      available: true,
    },
    {
      id: 2,
      caption: "Сказочное заморское яство",
      title: "Нямушка",
      taste: "с рыбой",
      rations: 40,
      bonus: 2,
      weight: 2,
      description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      selected: true,
      available: true,
    },
    {
      id: 3,
      caption: "Сказочное заморское яство",
      title: "Нямушка",
      taste: "с курой",
      rations: 100,
      bonus: 5,
      weight: 5,
      description: "Филе из цыплят с трюфелями в бульоне.",
      selected: false,
      available: false,
    },
  ];

  return (
    <div className="app">
      <div className="app__wrapper">
        <h1 className="app__heading">Ты сегодня покормил кота?</h1>
        <CardList data={data} />
      </div>
    </div>
  );
}

export default App;
