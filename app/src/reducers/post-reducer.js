import { 
    SET_POSTS,
    VOTE_ON_POST,
    ADD_POST,
    DELETE_POST,
    EDIT_POST,

    ADD_COMMENT,
    DELETE_COMMENT
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
        case VOTE_ON_POST:
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
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    deleted: true
                }
            };
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
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: {
                    ...state[action.comment.parentId], 
                    commentCount: state[action.comment.parentId].commentCount + 1
                }
            };
        case DELETE_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: {
                    ...state[action.comment.parentId], 
                    commentCount: state[action.comment.parentId].commentCount - 1
                }
            };
        default:
            return state;
    }
};

export default PostReducer;