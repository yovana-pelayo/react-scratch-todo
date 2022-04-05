import { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import Todos from './components/Todos';
import { getUser, logout } from './services/users';
import Auth from './views/Auth';
import Home from './views/Home';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header handleLogout={handleLogout} currentUser={currentUser} />
        <Switch>
          <Route exact path="/">
            {currentUser && <Home />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
