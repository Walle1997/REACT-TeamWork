import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Favorites from './components/Favorites';
import History from './components/History';
import Search from './components/Search';
import ItemDetail from './components/ItemDetail';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/favorites" component={Favorites} />
          <PrivateRoute path="/history" component={History} />
          <Route path="/item/:id" component={ItemDetail} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

const PrivateRoute: React.FC<{ component: React.FC; path: string }> = ({ component: Component, path }) => {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      path={path}
      render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />)}
    />
  );
};

export default App;
