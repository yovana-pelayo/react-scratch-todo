import { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';
import { getUser } from './services/users';
import Auth from './views/Auth';
import Home from './views/Home';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/todos">
            <Todos />
          </Route>
          <Route exact path="/todos/:id/create">
            {currentUser ? <CreateTodo /> : <Redirect to="/auth" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
