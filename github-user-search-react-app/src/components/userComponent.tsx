import React from 'react';

type myProps = {
    userData: userData
}

type myState = {

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

class UserComponent extends React.Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
    }

    render() {
        return (
            <div className="userSection row">
                <div className="userAvatar col-sm-4">
                    <img src={this.props.userData.avatar_url} />
                </div>
                <div className="col-sm-8 textSection">
                    {this.props.userData.name ?
                        <h1 className="userName">{this.props.userData.name}</h1> :
                        <h1 className="userName">{this.props.userData.login}</h1>
                    }

                    <p className="userLogin">@{this.props.userData.login}</p>

                    {this.props.userData.bio ?
                        <p className="userBio">{this.props.userData.bio}</p> :
                        <p className="userNoBio blurred">This profile has no bio</p>
                    }
                    <div className="userNumbersContainer">
                        <div className="row userNumberTitles">
                            <p className="col-sm-4 userNumberTitle">Repos</p>
                            <p className="col-sm-4 userNumberTitle">Followers</p>
                            <p className="col-sm-4 userNumberTitle">Following</p>
                        </div>
                        <div className="row userNumberDatas">
                            <p className="col-sm-4 userNumberData">{this.props.userData.public_repos}</p>
                            <p className="col-sm-4 userNumberData">{this.props.userData.followers}</p>
                            <p className="col-sm-4 userNumberData">{this.props.userData.following}</p>
                        </div>
                    </div>
                    <div className="linksFirstRow row">
                        <div className="userLocationContainer col-sm-6">
                            {this.props.userData.location ?
                                <p className="userLocation">{this.props.userData.location}</p> :
                                <p className="userNoLocation blurred">Not Available</p>
                            }
                        </div>
                        <div className="userTwitterContainer col-sm-6">
                            {this.props.userData.twitter_username ?
                                <p><a className="userTwitter" href={"https://twitter.com/" + (this.props.userData.twitter_username).replace('@', '')}>{this.props.userData.twitter_username}</a></p> :
                                <p className="userNoTwitter blurred">Not Available</p>
                            }
                        </div>
                    </div>
                    <div className="linksSecondRow row">
                        <div className="userBlogContainer col-sm-6">
                            {this.props.userData.blog ?
                                <p><a className="userBlog" href={this.props.userData.blog}>{this.props.userData.blog}</a></p> :
                                <p className="userNoBlog blurred">Not Available</p>
                            }
                        </div>
                        <div className="userCompanyContainer col-sm-6">
                            {this.props.userData.company ?
                                <p><a className="userCompany" href={"https://github.com/" + (this.props.userData.company).replace('@', '')}>{this.props.userData.company}</a></p> :
                                <p className="userNoCompany blurred">Not Available</p>
                            }
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default UserComponent;