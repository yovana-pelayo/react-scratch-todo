import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import Auth from './views/Auth';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/todos">
            <Todos />
          </Route>
          <Route exact path="/todosform">
            <TodoForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
