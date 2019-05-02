import { combineReducers } from 'redux';
import CategoryReducer from './category-reducer';
import PostReducer from './post-reducer';
import PostDisplayReducer from './post-display-reducer';

const Reducers = combineReducers({
    categories: CategoryReducer,
    posts: PostReducer,
    postsOrder: PostDisplayReducer
});

export default Reducers;