import {
    ORDER_POSTS
} from '../actions/types';

const initialState = ['DefaultPostID'];

const PostDisplayReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_POSTS:
            return action.postsOrder;
        default:
            return state;
    }
};

export default PostDisplayReducer;