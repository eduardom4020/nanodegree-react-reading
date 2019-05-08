import { 
    SET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT
} from '../actions/types';

const initialState = {
    "DefaultCommentID": {
        id: 'DefaultCommentID',
        parentId: "DefaultPostID",
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
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
            // const { comment } = action;
            return state.map(comment => action.id === comment.id ? {...comment, deleted: true} : comment);
        // case VOTE:
        //     const { postId, score } = action;
        //     return {
        //         ...state, 
        //         [postId]: {
        //             ...state[postId],
        //             voteScore: state[postId].voteScore + score
        //         }
        //     }
        default:
            return state;
    }
};

export default CommentsReducer;