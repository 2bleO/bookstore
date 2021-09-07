import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          <li><Link exact to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
