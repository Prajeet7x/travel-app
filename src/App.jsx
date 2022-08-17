import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import data from '../data/data'

function App() {

  const items = data.map((item) => {
    return (
      <Card
        {...item}
      />
    )
  })

  return (
    <div>
      <NavBar />
      <div>{items}</div>
    </div>
  )
}

export default App