import { 
    SET_POSTS,
    VOTE
} from '../actions/types';

const initialState = {
    "DefaultPostID": {
        id: 'DefaultPostID',
        timestamp: 1467166872634,
        title: 'DefaultPost',
        body: 'DefaultPost.',
        author: 'default',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
    }
};

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return action.posts;
        case VOTE:
            const { postId, score } = action;
            return {
                ...state, 
                [postId]: {
                    ...state[postId],
                    voteScore: state[postId].voteScore + score
                }
            }
        default:
            return state;
    }
};

export default PostReducer;