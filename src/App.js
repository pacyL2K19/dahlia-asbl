import React, {useEffect} from 'react';
import AOS from "aos"
import {Navbar} from './components/Navbar';
function App() {
  useEffect (() => {
    AOS.init();
  })
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
