import React, { Component } from 'react';

export class Form extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        city: '',
        country: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => (e) => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const { step } = this.state;
        // const { firstName, lastName, phone, email, city, country } = this.state;
        // const values = {firstName, lastName, phone, email, city, country}

        switch(step) {
            case 1:
                return(
                    <div>
                        
                    </div>
                    // <FormUserDetails
                    //     nextStep = {this.nextStep}
                    //     handleChange = {this.handleChange}
                    //     values = {values}
                    // />
                )
            case 2:
                return <h1>FormPersonal</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
            default:
                
        }


        return (
            <div>
                
            </div>
        )
    }
}

export default Form
