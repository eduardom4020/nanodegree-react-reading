import { 
    SET_POSTS,
    VOTE,
    ADD_POST,
    DELETE_POST,
    EDIT_POST
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
        case ADD_POST:
            const { post } = action;
            return {...state, [post.id]: post}
        case DELETE_POST:
            // const { comment } = action;
            return state.map(post => post.id === post.id ? {...post, deleted: true} : post);
        case EDIT_POST:
            const { id, body, title } = action;
            return {
                ...state, 
                [id]: {
                    ...state[id], 
                    body,
                    title
                }
            };
        default:
            return state;
    }
};

export default PostReducer;