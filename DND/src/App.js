import React from 'react';

import './App.css';
import ClassesForm from './components/ClassesForm'
import ClassesList from './components/ClassesList'

function App() {
  return (
    <div>
      <h1>D&D Classes</h1>
   <ClassesForm/>
   <div className = 'Classes'> 
   <ClassesList/>
   </div> 
    </div>
  );
}

export default App;
