import React, { useState} from 'react';

import data from "./data"
import List from './components/List';

import './App.css';


function App() {
  const [people, setPeople] = useState(data);

  // clear values

  const chengClearAll = () => {
    setPeople([])
  }

// release of birthday owners

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today </h3>
        <List people ={ people}/>
        <button onClick={chengClearAll}>clear all</button>
      </section>
    </main>
  )
}

export default App;
