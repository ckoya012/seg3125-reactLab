import React, {
    Component
} from 'react'
import {
    MuiThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    /* theme for v1.x */
});


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {
            values,
            handleChange
        } = this.props;
        return ( <
            MuiThemeProvider theme = {
                theme
            } >
            <
            React.Fragment >
            <
            AppBar title = "Personal Information" / >
            <
            TextField onChange = {
                handleChange('firstName')
            }
            defaultValue = {
                values.firstName
            }
            />

            <
            /React.Fragment> < /
            MuiThemeProvider >
        )
    }
}

export default FormUserDetails