import React, { useState, useEffect } from 'react'

import Header from './components/Header';
import './styles/index.css'

function App() {
  const [mode, setMode] = useState(false);

  // useEffect(() => {
  //   setMode(mode)
  // }, [mode]);
  console.log(mode)
  const appStyles = mode ? { backgroundColor: 'grey' } : { backgroundColor: '#131d22' };

  return (
    <div className="App">
      <Header mode={mode} setMode={setMode} style={appStyles} />
    </div>
  )
}

export default App;
