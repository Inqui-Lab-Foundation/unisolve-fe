import { Component } from 'react';
import UserBasicDetails from './UserBasicDetails.js';
import UserPersonalDetails from './UserPersonalDetails.js';
import UserPersonalInfo from './UserPersonalInfo.js';
import UserAddteam from './UserAddteam.js';
import UserAddMentor from './UserAddMentor.js';
import Success from './Success.js';

class SignUp extends Component {
    state = {
        step: 1,
        month: '',
        day: '',
        year: '',
        // STEP-2
        gardianEmail: '',
        username: '',
        password: '',
        // STEP-3
        userFirstName: '',
        userLastName: '',
        userPhone: '',
        userEmail: '',
        userPassword: '',
        // STEP-4, keeping basic fields, let's changes it later
        teamMemberFullName: '',
        teamMemberFullEmail: '',
        // STEP-5, keeping basic fields, let's changes it later
        mentorMemberFullName: '',
        mentorMemberFullEmail: ''
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const {
            month,
            day,
            year,
            gardianEmail,
            username,
            password,
            userFirstName,
            userLastName,
            userPhone,
            userEmail,
            userPassword,
            teamMemberFullName,
            teamMemberFullEmail,
            mentorMemberFullName,
            mentorMemberFullEmail
        } = this.state;
        const values = {
            month,
            day,
            year,
            gardianEmail,
            username,
            password,
            userFirstName,
            userLastName,
            userPhone,
            userEmail,
            userPassword,
            teamMemberFullName,
            teamMemberFullEmail,
            mentorMemberFullName,
            mentorMemberFullEmail
        };

        switch (step) {
        case 1:
            return (
                <UserBasicDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        case 2:
            return (
                <UserPersonalDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        case 3:
            return (
                <UserPersonalInfo
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        case 4:
            return (
                <UserAddteam
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        case 5:
            return (
                <UserAddMentor
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        case 6:
            return <Success />;
        default:
        }

        return (
            <div>
                <h1>SignUp</h1>
            </div>
        );
    }
}

export default SignUp;
