import './App.css';
import Nav from "./components/navbar"
import Card from "./components/Card"
import Data from "./data"

export default function App() {
  const cardElements = Data.map(data => {
    return <Card {...data} />
    })
  
  return (
    <div className="App" style={{ backgroundImage: "url(/img/Bg.svg)"}}>
      <Nav />
      {cardElements}
    </div>
  );
}