import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Listing from './components/Listing';
import TopList from "./data/TopList";
function App() {
  return (
    <div className="App">
      <Header />
      <ul>
      {TopList.map(Listing)}
      </ul>
      
      <Footer />
    </div>
  );
}

export default App;
