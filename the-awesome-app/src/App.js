import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/products/ListProducts';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Search from './components/hooks/Search';
import GadgetStore from './components/gadgets/GadgetStore';
import ViewCart from './components/gadgets/ViewCart';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import HooksDemo from './components/hooks/HooksDemo';


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
                <Link className="nav-link" to="/gadgets">Gadgets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">View Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hooks">Hooks</Link>
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
                
                <Route path="/search" component={Search}/>
                <ProtectedRoute path="/gadgets" component={GadgetStore}/>
                <ProtectedRoute path="/products" component={ListProducts}/>
                <Route path="/cart" component={ViewCart}/>
                <Route path="/hooks" component={HooksDemo}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
