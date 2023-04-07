
import './App.css';
import Header from './Components/Layout/Header.js';
import { Fragment } from 'react';
import Meals from './Components/Meals/Meals.js';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
