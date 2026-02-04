import { useState } from 'react'
import './App.css'
import OrderManagement from './components/order management'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OrderManagement />
    </>
  )
}

export default App
