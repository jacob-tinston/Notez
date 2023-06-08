import { useEffect } from 'react';
import logo from './logo.svg';
import './sass/app.scss';
import './sass/partials/app.scss';
import { initAnims } from './utils/animations.js';

function App() {
  useEffect(() => {
    initAnims();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="reveal reveal-bottom">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
