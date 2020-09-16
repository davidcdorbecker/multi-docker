import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Fib from './Fib'
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
        <Route exact path="/">
          <Fib />
        </Route>
        <Route path="/otherpage">
          <OtherPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
