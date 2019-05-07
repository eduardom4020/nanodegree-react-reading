import { combineReducers } from 'redux';
import CategoryReducer from './category-reducer';
import PostReducer from './post-reducer';
import PostDisplayReducer from './post-display-reducer';
import CommentReducer from './comments-reducer';

const Reducers = combineReducers({
    categories: CategoryReducer,
    posts: PostReducer,
    postsOrder: PostDisplayReducer,
    comments: CommentReducer
});

export default Reducers;