import React from 'react';
import { render } from 'react-dom';
import { AppService } from '../services/app.service';

type myProps = {
    userData: userData
}

type myState = {
    
}

type userData = {
    url: string
}

class UserComponent extends React.Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
    }

    render() {
        return (
            <div className="userSection">
                <h1 className="userLogin">{this.props.userData.url}</h1>
            </div>
        )
    }
}

export default UserComponent;