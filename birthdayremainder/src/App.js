import './App.css';
import React,{useState} from 'react';
import data from './components/Data';
import List from './components/List';
function App() {
  const [people,setPeople]=useState(data);
  return (
    <div>
      <main>
        <section className='container'>
          <h3>{people.length} Birthdays Today</h3>
          <List people={people}/>
          <button onClick={()=> setPeople([])}>Clear All</button>
        </section>
      </main>
      
    </div>
  );
}

export default App;
