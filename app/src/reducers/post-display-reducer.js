import {
    ORDER_POSTS
} from '../actions/types';

const initialState = [{id: 'DefaultPostID', category: 'default'}];

const PostDisplayReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_POSTS:
            const changedOrderIDs = action.postsOrder.map(post => post.id);
            const notChanged = state.filter(post => changedOrderIDs.indexOf(post.id) === -1);
            return [...action.postsOrder, ...notChanged];
        default:
            return state;
    }
};

export default PostDisplayReducer;