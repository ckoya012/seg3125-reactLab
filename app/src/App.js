import React, {Component} from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import RecipeList from './components/RecipeList';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Route path="/about" component={About}/>
          <Route path="/register" component={Register}/>
          <Route path="/recipelist" component={RecipeList}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
