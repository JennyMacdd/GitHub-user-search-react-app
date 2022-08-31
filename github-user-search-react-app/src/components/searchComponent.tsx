import React from 'react';
import UserComponent from './userComponent';
import { AppService } from '../services/app.service';
import searchIcon from '../icon-search.svg';

type myProps = {

}

type myState = {
    username: string,
    userData: userData
}

type userData = {
    login: string,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    followers: number,
    following: number
}

class SearchComponent extends React.Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
        this.state = {
            username: '',
            userData: {
                login: 'octocat',
                avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
                name: 'The Octocat',
                company: '@github',
                blog: 'https://github.blog',
                location: 'San Francisco',
                bio: '',
                twitter_username: '',
                public_repos: 8,
                followers: 6753,
                following: 9
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
                <div className="searchBar">
                    <img src={searchIcon} />
                    <input type="text" placeholder="Search GitHub username..." value={this.state.username} onChange={this.handleChange} />
                    <input type="submit" value="Search" onClick={this.handleSubmit} />
                </div>
                {this.state.userData.login ? <UserComponent userData={this.state.userData} /> : <div>No user was found.</div>}
            </div>
        )
    }
}

export default SearchComponent;