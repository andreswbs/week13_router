import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom'
import About from './About';
import SignUp from './SignUp';
import Articles from './Articles';
import Header from './Header';

function App() {
  return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
          </Switch>
        </main>
      </div>
  );
}

export default App;
