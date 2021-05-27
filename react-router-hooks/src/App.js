import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const App = () => {

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
            <Route path="/">
              
            </Route>
            <Route path="/films">

            </Route>
            <Route path="/people">

            </Route>
          </Switch>
        </main>
      </BrowserRouter>

  )
}

export default App;
