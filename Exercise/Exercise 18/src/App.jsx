import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'

function App() {
const [cards, setCards] = useState([])
useEffect(() => {
  const fetchData = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await a.json();
    setCards(data);
    console.log(data);
  }
  fetchData();
}, [])
  return (
    <>
    <Navbar />
      <div className="container">
        {cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <h1>{card.title}</h1>
              <p>{card.body}</p>
            </div>
          )
          })}
      </div>

    </>
  )
}

export default App
