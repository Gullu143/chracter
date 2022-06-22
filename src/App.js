import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './Components/Filters/Filters';
import Cards from './Components/Cards/Cards';

function App() {
  return (
    <div className="container py-4">
     <Filters />
     <Cards />
    </div>
  );
}

export default App;
