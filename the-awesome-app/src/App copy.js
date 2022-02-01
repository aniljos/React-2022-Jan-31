import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/products/ListProducts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      <section>
          {/* <Hello message="React"/>
          <Hello message="JSX"/> */}

          {/* <Counter title="The Count"/>
          <Counter title="Numbers"/> */}

          <ListProducts/>
          
      </section>
      {/* <footer>
        This is a footer
      </footer> */}
    </div>
  );
}

export default App;
