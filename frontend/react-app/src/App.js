import React, { useState, useEffect } from 'react'

import Header from './components/Header';
import Body from './components/Body';

import './styles/index.css'

function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    setMode(mode)
  }, [mode]);

  const bodyBG = !mode ? { backgroundColor: 'rgb(11, 11, 11)', color: 'white' } : { backgroundColor: 'rgb(228, 228, 228)', color: 'black' };
  document.getElementsByTagName('body').style = bodyBG;
  console.log(mode)
  const appStyles = mode ? { backgroundColor: '#898989', transform: 'backgroundColor 1s eas-in-out' } :
    { backgroundColor: '#131d22', transform: 'backgroundColor 1s eas-in-out' };

  return (
    <div className="App">
      <Header mode={mode} setMode={setMode} style={appStyles} />
      <Body mode={mode} style={bodyBG} />
    </div>
  )
}

export default App;
