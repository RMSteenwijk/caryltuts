import './App.css';
import ListOfReasons from './ListOfReasons';

function App() {
  let name = "Caryl";

  return (
    <div className="App">
      <header className="App-header">
        <ListOfReasons title={name}/>
      </header>
    </div>
  );
}

export default App;
