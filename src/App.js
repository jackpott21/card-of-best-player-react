// import logo from './logo.svg';
import "./App.css";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Who are the best soccer players in history?</h1>
        <Testimonio
          img="messi"
          name="Lionel Messi"
          country="Argentian"
          job="Futbol Player"
          caract="Lionel Andrés Messi Cuccittini, known as Leo Messi, is an Argentine footballer who plays as a striker or midfielder. Historical player of the Fútbol Club Barcelona, ​​to which he was linked for twenty years, since 2021 he has been a member of the Paris Saint-Germain squad of Ligue 1 in France."
        />
        <Testimonio
          img="cr7"
          name="Cristiano Ronaldo"
          country="Portuguese"
          job="Futbol Player"
          caract="Cristiano Ronaldo dos Santos Aveiro, known as Cristiano Ronaldo, is a Portuguese footballer. He plays as a left winger or forward and his current team is Al-Nassr F.C. of the Saudi Professional League. He is a full international with the Portugal team, of which he is captain and all-time top scorer."
        />
        <Testimonio
          img="mbappe"
          name="Kylian Mbappé"
          country="French"
          job="Futbol Player"
          caract="Kylian Mbappé Lottin is a French footballer who plays as a striker for Paris Saint-Germain F.C. in Ligue 1. He is international with the France team, a team of which he is captain. He began his career with AS Monaco of the French league, making his professional debut in 2015, at the age of 16."
        />
      </div>
    </div>
  );
}

export default App;
