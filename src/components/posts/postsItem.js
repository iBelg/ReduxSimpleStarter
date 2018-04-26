import React, {Component} from 'react';

class PostsItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.post.title}</h3>
            </div>
        );
    }
}

export default PostsItem;