import { useState } from 'react'
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Body from "./components/Body.jsx"
import Registration from './components/Registration.jsx'

function App() {

  const [showReg, setShowReg] = useState(false)

  function toggleShowReg(){
    setShowReg(!showReg)
  }

  const [logState, setLogState] = useState(false)

  function toggleLogState(){
    setLogState(true)
  }

  function onSignIn(){
    setShowReg(false)
    setLogState(true)
  }

  return (
    <>
      <Header logState={logState} regFormStat={showReg} regForm={toggleShowReg}/>
      <Hero logState={logState}/>
      <Body logState={logState}/>
      {showReg && <Registration onSignIn={onSignIn} cancelForm={toggleShowReg}/>}
    </>
  )
}

export default App
