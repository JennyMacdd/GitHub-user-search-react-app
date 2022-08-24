import React from 'react';
import UserComponent from './userComponent';

type myProps = {

}

type myState = {
    username: string
}

class SearchComponent extends React.Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) { this.setState({ username: e.currentTarget.value }); }
    handleSubmit(e: React.FormEvent<HTMLInputElement>) {
        alert('A name was submitted: ' + this.state.username);
        e.preventDefault();
    }

    render() {
        return (
            <div className="searchComponent">
                <input type="text" placeholder="Enter a username" value={this.state.username} onChange={this.handleChange} />
                <input type="submit" value="Submit" /> 
                <UserComponent username={this.state.username} />
            </div>
        )
    }
}

export default SearchComponent;