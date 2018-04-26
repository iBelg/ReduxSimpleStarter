import _ from 'lodash';
import { FETCH_POSTS } from '../../actions/posts/posts.action';


const PostsReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default: 
            return state;
    }
};

export default PostsReducer;