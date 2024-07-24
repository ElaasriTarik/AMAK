import React, { useState, useEffect } from 'react'

import Header from './components/Header';
import Body from './components/Body';

import './styles/index.css'

function App() {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    setMode(mode)
  }, [mode]);

  const bodyBG = !mode ? { backgroundColor: '#e5efef', color: 'white' } : { backgroundColor: '#e5efef', color: 'black' };
  document.getElementsByTagName('body').style = bodyBG;
  console.log(mode)
  const appStyles = mode ? { backgroundColor: 'transparent', transform: 'backgroundColor 1s eas-in-out' } :
    { backgroundColor: 'rgb(6, 8, 9)', transform: 'backgroundColor 1s eas-in-out' };

  return (
    <div className="App">
      {/* <Header mode={mode} setMode={setMode} style={appStyles} /> */}
      <Body mode={mode} style={bodyBG} />
    </div>
  )
}

export default App;
