import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Homepage } from './Pages'
import Navigation from './Layout/Nav'

function App() {

  return (
    <>
      <Navigation />
      <Homepage />
    </>
  )
}

export default App
