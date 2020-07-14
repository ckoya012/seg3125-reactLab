import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'

import SingleRecipe from './SingleRecipe';
import {createBrowserHistory} from 'history';
import Link from '@material-ui/core/Link'

const browserHistory = createBrowserHistory();

const RecipeListItem = (props) => {


    return(
        <div>
            { props.recipe ? (

                <Card>
                <h2><Link href={`lessons/${props.recipe.fields.slug}`}>{props.recipe.fields.title}</Link></h2>

                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.recipe.fields.image.fields.file.url}
                    title={props.recipe.fields.title}/>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h4">
                            {props.recipe.fields.title}
                        </Typography>
                        <Typography component="p">
                            <b>Instructor: </b> {props.recipe.fields.chef}
                        </Typography>
                        <br/>
                        <Typography component="p">
                            {props.recipe.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    
                        <Button size="small" color="primary" href={`lessons/${props.recipe.fields.slug}`} target="_blank">
                        Go to Recipe
                        </Button>

                        
                        {/* <BrowserRouter>
                            <Route path="/lessons/:slug" render={(props) => <SingleRecipe {...props} />} />
                        </BrowserRouter> */}


                    {/* <Router history={browserHistory}>
                        <Route path='lessons/:slug' component={SingleRecipe}/>
                    </Router> */}


                        <Button size="small" color="primary" target="_blank">
                            Register for Class
                        </Button>
                    </CardActions>
                </Card>
            ): null}
        </div>
    )
}

export default RecipeListItem;