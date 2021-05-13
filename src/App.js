import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import SignIn from './components/Sigin';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './components/Signup';
function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/signin">
          <SignIn/>
        </Route>
        <Route path = "/">
          <Products/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
