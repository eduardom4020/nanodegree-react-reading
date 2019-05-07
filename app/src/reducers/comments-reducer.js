import { 
    SET_COMMENTS
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