import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div className='container mt-3'>
                <div class="jumbotron">
                    <h1 class="display-4">Welcome to my Blog App</h1>
                    <p class="lead">This is a simple application built in ReactJS with Redux for state management. It calls an API hosted on Heroku to handle CRUD functionality.</p>
                    <hr class="my-4"/>
                        <p>Please give it a try and make or deleted a post.</p>
                    <Link className="btn btn-primary btn-lg" to='/posts/new'>
                        Add a Post
                    </Link>
                </div>
                <div className="text-xs-right">
                    <h3>Posts</h3>
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);