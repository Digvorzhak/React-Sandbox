import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;

// Create a new react app, and change its title in the tag to
// be “AppleSeeds React App” and the link text on the
// main page to be “Click Me” instead of “Learn React”
