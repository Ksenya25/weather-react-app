import "./App.css";
import SearchEngine from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather react App</h1>
        <SearchEngine />

        <div className="footer">
          <p>This project was coded by Ksenya</p>
        </div>
      </header>
    </div>
  );
}

export default App;
