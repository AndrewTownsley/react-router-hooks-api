import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Films from './views/Films';
import People from './views/People';

const App = () => {

  fetch("https://ghibliapi.herokuapp.com")
    .then(response => response.json())
    .then(data => console.log(data));

  return (
      <BrowserRouter>
        <main>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
              </li>
            <li>
              <Link to="/films">Films</Link>
              </li>
            <li>
              <Link to="/people">People</Link>
              </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/films">
              <Films />
            </Route>
            <Route exact path="/people">
              <People />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>

  )
}

export default App;
