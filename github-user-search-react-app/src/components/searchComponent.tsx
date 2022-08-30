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
    login: string,
    avatar_url: string,
    url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    bio: string,
    twitter_username: string
}

class SearchComponent extends React.Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
        this.state = {
            username: '',
            userData: {
                login: 'octocat',
                avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
                url: 'https://api.github.com/users/octocat',
                name: 'The Octocat',
                company: '@github',
                blog: 'https://github.blog',
                location: 'San Francisco',
                email: '',
                bio: '',
                twitter_username: ''
            }
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
                {this.state.userData.login ? <UserComponent userData={this.state.userData} /> : <div>No user was found.</div>}
            </div>
        )
    }
}

export default SearchComponent;