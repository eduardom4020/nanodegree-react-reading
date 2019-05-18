import { 
    SET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    VOTE_ON_COMMENT
} from '../actions/types';

const initialState = {
    "DefaultCommentID": {
        id: 'DefaultCommentID',
        parentId: "DefaultPostID",
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 1,
        deleted: false,
        parentDeleted: false
    }
};

const CommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return action.comments || state;
        case ADD_COMMENT:
            const { comment } = action;
            return {...state, [comment.id]: comment}
        case DELETE_COMMENT:
            const { comment: toDeleteComment } = action;
            return {
                ...state,
                [toDeleteComment.id]: {
                    ...toDeleteComment,
                    deleted: true
                }
            };
        case EDIT_COMMENT:
            const { id, body, timestamp } = action.comment;
            return {
                ...state, 
                [id]: {
                    ...state[id], 
                    body
                }
            };
        case VOTE_ON_COMMENT:
            const { commentId, score } = action;
            return {
                ...state, 
                [commentId]: {
                    ...state[commentId],
                    voteScore: state[commentId].voteScore + score
                }
            };
        default:
            return state;
    }
};

export default CommentsReducer;