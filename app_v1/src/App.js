import React, {Component} from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage'
import About from './components/About';
import RecipeList from './components/RecipeList';
import Register from './components/Register';
import * as contentful from 'contentful';
import './App.css';
import {Route} from 'react-router';
import SingleRecipe from './components/SingleRecipe';
import Footer from './components/Footer';


const SPACE_ID = 'fb7egqp4t5o4';
const ACCESS_TOKEN = 'gTzwtGt5x7av4xXQZQSYo11eWMR166TQwzMSpPE0bVc';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
    }
  }

  componentDidMount() {
      client.getEntries({
          content_type: 'recipe',
      })
      .then((response => {
          this.setState({recipes: response.items})
      }))
      .catch((error) => {
          console.log("Error occurred fetching data");
          console.log(error)
      })
  }


  render() {
    // generate a route for each item in the content array
    let recipeRoutes = [];
    this.state.recipes.forEach((item, i) => {
      recipeRoutes.push(<Route path={`/recipes/${item.fields.slug}`} component={SingleRecipe} key={i} />);
    });

      return (
        <div>
          <BrowserRouter>
            <div className="App">
              <NavBar/>
              <Route path="/" exact component={Homepage}/>
              <Route path="/about" component={About}/>
              <Route path="/register" component={Register}/>
              <Route path="/recipes" exact component={RecipeList}/>
              {recipeRoutes}
            </div>
          </BrowserRouter>
          <Footer/>
        </div>
      )
  }
}

export default App;
