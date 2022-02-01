import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/products/ListProducts';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div >
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>


        <section>
{/* 
            <Route path="/home" >
              <Hello message="Hello"/>
            </Route> */}
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
