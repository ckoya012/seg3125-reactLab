import React, {Component} from 'react';
import * as contentful from 'contentful';
const SPACE_ID = 'fb7egqp4t5o4';
const ACCESS_TOKEN = 'gTzwtGt5x7av4xXQZQSYo11eWMR166TQwzMSpPE0bVc';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});
class SingleRecipe extends Component {
    constructor() {
        super()
        this.state = {recipe: null}
    }

    componentDidMount() {
        const {params} = this.props;
        if (params.slug) {
            client.getEntries({
                content_type: 'recipe',
                'fields.slug': params.slug
            }).then((response) => {
                this.setState({recipe: response.items[0]})
            })
        }
    }

    render() {
        if (!this.state.recipe) {
            return <h1>Not found</h1>
        }

        return (
            <div>
                <h1>{this.state.article.fields.title}</h1>
                <div>{this.state.article.fields.video}</div>
            </div>
        )
    }

}

export default SingleRecipe;

