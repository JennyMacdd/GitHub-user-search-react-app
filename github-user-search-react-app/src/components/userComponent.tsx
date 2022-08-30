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
    email: string,
    bio: string,
    twitter_username: string
}

class UserComponent extends React.Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
    }

    render() {
        return (
            <div className="userSection">
                {this.props.userData.name ?
                    <h1 className="userName">{this.props.userData.name}</h1> :
                    <h1 className="userName">{this.props.userData.login}</h1>
                }
                <h1 className="userLogin">@{this.props.userData.login}</h1>
                <h1 className="userAvatar">{this.props.userData.avatar_url}</h1>
                {this.props.userData.url ?
                    <p className="userUrl">{this.props.userData.url}</p> :
                    <p className="userNoUrl">Not Available</p>
                }
                {this.props.userData.bio ?
                    <p className="userBio">{this.props.userData.bio}</p> :
                    <p className="userNoBio">This profile has no bio</p>
                }
                {this.props.userData.company ?
                    <p><a className="userCompany" href={"https://github.com/" + (this.props.userData.company).replace('@', '')}>{this.props.userData.company}</a></p> :
                    <p className="userNoCompany">Not Available</p>
                }
                {this.props.userData.blog ?
                    <p><a className="userBlog" href={this.props.userData.blog}>{this.props.userData.blog}</a></p> :
                    <p className="userNoBlog">Not Available</p>
                }
                
                {this.props.userData.location ? 
                    <p className="userLocation">{this.props.userData.location}</p> :
                    <p className="userNoLocation">Not Available</p>
                }
                {this.props.userData.twitter_username ?
                    <p><a className="userTwitter" href={"https://twitter.com/" + (this.props.userData.twitter_username).replace('@', '')}>{this.props.userData.twitter_username}</a></p> :
                    <p className="userNoTwitter">Not Available</p>
                }
                <h1 className="userLogin">{this.props.userData.email}</h1>
            </div>
        )
    }
}

export default UserComponent;