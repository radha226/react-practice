import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Listing from './components/Listing';
import TopList from "./data/TopList";
import IncrementButton from "./components/IncrementButton"
// import React,{useState} from 'react';
function App() { 
  return (
    <div className="App">
      <Header />
      <ul>
      {TopList.map(Listing)}
      </ul>
     <IncrementButton></IncrementButton>
      <Footer />
    </div>
  );
}

export default App;
