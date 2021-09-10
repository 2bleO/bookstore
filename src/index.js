import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './components/Books';
import Categories from './components/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="app">
          <div className="box">
            <header className="header bg-white p-3 d-flex align-items-center mb-4">
              <h1 className="header-text d-inline-block">BookStore CMS</h1>
              <Link exact to="/" className="link">Books</Link>
              <Link to="/categories" className="link">Categories</Link>
            </header>
            <Switch>
              <Route exact path="/">
                <Books />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
