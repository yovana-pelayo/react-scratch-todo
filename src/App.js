import { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
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
          <Route to="/" exact>
            {currentUser && <Home />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
