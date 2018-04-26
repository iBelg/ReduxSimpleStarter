import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPosts} from '../../actions/posts/posts.action';
import PostsItem from './postsItem';

class PostsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="row">
                <div className=""></div>
                <div className="col-lg-12" >
                    <h3>Posts</h3>
                    <div>
                        {this.renderPosts()}
                    </div>
                </div>
                
            </div>
        );
    }

    renderPosts() {
        return _.map(this.props.posts, (post) => {
            return (
                <PostsItem key={post.id} post={post} />
            );
        });
    }

}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);