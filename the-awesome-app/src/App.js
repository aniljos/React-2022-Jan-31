import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/products/ListProducts';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Search from './components/hooks/Search';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React</a>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <section>
            <Switch>
                <Route path="/home" render={() => <Hello message="React" />}/>
                <Route path="/counter" render={() => <Counter title="Counter" />}/>
                <Route path="/products" component={ListProducts}/>
                <Route path="/search" component={Search}/>
            </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
