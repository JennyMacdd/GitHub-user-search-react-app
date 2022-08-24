import React from 'react';
import UserComponent from './userComponent';
import { AppService } from '../services/app.service';

type myProps = {

}

type myState = {
    username: string,
    userData: userData
}

type userData = {
    url: string
}

class SearchComponent extends React.Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
        this.state = {
            username: '',
            userData: { url: ''}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) { this.setState({ username: e.currentTarget.value }); }
    async handleSubmit() {
        const appService = new AppService();
        const getCurrentUser = await appService.getUser(this.state.username);
        this.setState({ userData: getCurrentUser })
    }

    render() {
        return (
            <div className="searchComponent">
                <input type="text" placeholder="Enter a username" value={this.state.username} onChange={this.handleChange} />
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
                <UserComponent userData={this.state.userData} />
            </div>
        )
    }
}

export default SearchComponent;