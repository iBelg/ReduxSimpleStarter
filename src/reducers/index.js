import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostsReducer from './posts/posts.reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
