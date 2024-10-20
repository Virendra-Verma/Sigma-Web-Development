import { useState } from 'react'
import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <div className="bg-red-600">
        Hey I'm Red.
      </div>
    </div>


    </>
  )
}

export default App
