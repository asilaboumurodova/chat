import React from 'react'
import MainBox from './components/MainBox';
import ContextProvider from "@/context/Context.jsx";

function App() {
  return (
    <ContextProvider>
      <MainBox />
    </ContextProvider>
  )
}

export default App