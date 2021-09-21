import React from 'react';
import './App.css';
import './components/Header.css';
import './components/Topics.css';
import './components/mainTopic.css';
import './components/mostReading.css';
import Header from './components/Header';
import Topics from './components/Topics';
import MainTopic from './components/mainTopic';
import MostReading from './components/mostReading';



function App() {
  return(
    <div>
    <Header />
    <Topics />
      <div className="body">
      <MainTopic />
      <MostReading />
      </div>
    </div>
 );
}

export default App;