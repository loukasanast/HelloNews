import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/business" exact component={Business} />
        <Route path="/entertainment" exact component={Entertainment} />
        <Route path="/health" exact component={Health} />
        <Route path="/science" exact component={Science} />
        <Route path="/sports" exact component={Sports} />
        <Route path="/technology" exact component={Technology} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
