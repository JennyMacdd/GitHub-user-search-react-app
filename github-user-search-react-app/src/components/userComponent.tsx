import React from 'react';
import { render } from 'react-dom';
import { AppService } from '../services/app.service';

type myProps = {
    username: string
}

type myState = {
    userData: userData
}

type userData = {
    login: string
}

class UserComponent extends React.Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
        this.state = {
            userData: {login: ''}
        }
    }

    async componentDidMount() {
        const appService = new AppService();
        const getCurrentUser = await appService.getUser(this.props.username);
        this.setState({ userData: getCurrentUser })
    }

    render() {
        return (
            <div className="userSection">
                <h1 className="userLogin">{this.state.userData.login}</h1>
            </div>
        )
    }
}

export default UserComponent;