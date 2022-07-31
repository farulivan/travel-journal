import './App.css';
import Nav from "./components/navbar"
import Card from "./components/Card"
import Data from "./data"

export default function App() {
  const cardElements = Data
    .sort((a,b) => {
    return (new Date(b.startDate)) - (new Date(a.startDate))})
    .map(data => {
    return <Card {...data} />
    })
    
  
  return (
    <div className="App" style={{ backgroundImage: "url(/img/Bg.svg)"}}>
      <Nav />
      <section className="card--container">
        {cardElements}
      </section>
    </div>
  );
}