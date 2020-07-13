import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const RecipePage = (props) => {
    return(
        <div>
            { props.recipe ? (
                <Card>
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
                    <CardActions>
                        <Button size="small" color="primary" href="{props.recipe.fields.url}" target="_blank">
                            Go to Recipe
                        </Button>
                    </CardActions>
                </Card>
            ): null}
        </div>
    )
}

export default RecipePage;