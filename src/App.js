import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div className="app">

    <div className="navbar">
      <Navbar />
    </div>

    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <Footer />
    </div>
  </div>
);

export default App;