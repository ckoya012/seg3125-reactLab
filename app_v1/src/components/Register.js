import React, {Component} from 'react';
import RecipeList from './RecipeList';
import Form from './Form';


class Register extends Component {
    render() {
        return(
            <div>
                <h1 style={{textAlign: "center", marginTop: '50px'}}>Step 1: Select a class</h1>
                <RecipeList/>
                <Form/>
            </div>
        )
    }
}

export default Register;