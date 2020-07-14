import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Router } from 'react-router-dom';
import Homepage from './components/Homepage'
import About from './components/About';
import RecipeList from './components/RecipeList';
import Register from './components/Register';

import './App.css';
import {Route} from 'react-router';


import SingleRecipe from './components/SingleRecipe';
import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();

function App() {

    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <NavBar/>
            <Route path="/" exact component={Homepage}/>
            <Route path="/about" component={About}/>
            <Route path="/register" component={Register}/>
            <Route path="/recipelist" component={RecipeList}/>
            {/* <Route exact path="/lessons/:slug" render={(props) => <SingleRecipe {...props} />} /> */}

          </div>
        </BrowserRouter>
      </div>
    );
}

export default App;
