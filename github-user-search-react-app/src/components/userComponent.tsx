import React from 'react';
import { render } from 'react-dom';
import { AppService } from '../services/app.service';

type myProps = {
    userData: userData
}

type myState = {
    
}

type userData = {
    login: string,
    avatar_url: string,
    url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string
}

class UserComponent extends React.Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
    }

    render() {
        return (
            <div className="userSection">
                <h1 className="userLogin">{this.props.userData.login}</h1>
                <h1 className="userLogin">{this.props.userData.avatar_url}</h1>
                <h1 className="userLogin">{this.props.userData.url}</h1>
                <h1 className="userLogin">{this.props.userData.name}</h1>
                <h1 className="userLogin">{this.props.userData.company}</h1>
                <h1 className="userLogin">{this.props.userData.blog}</h1>
                <h1 className="userLogin">{this.props.userData.location}</h1>
                <h1 className="userLogin">{this.props.userData.email}</h1>
            </div>
        )
    }
}

export default UserComponent;