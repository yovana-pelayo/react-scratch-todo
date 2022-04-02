import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/todos">
            <Todos />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
