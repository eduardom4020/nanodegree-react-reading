import { 
    SET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT
} from './types';

import { getFromPath } from '../helpers/url-helpers';
import { newUUIDv4 } from '../helpers/data-helpers';

// import { MainStore } from '../store/base-stores';
import { sendCommentToServer, setCommentAsDeleted } from '../providers/comments-provider';

export const setComments = (comments=null) => {
    try {
        return {
            type: SET_COMMENTS,
            comments
        }
    } catch(err) {
        console.error('On setting posts: ', err);
    }
};

export const addComment = ({author, comment, parentId=null}) => {
    try {
        if(!author) {
            throw 'Cannot add comments without author'
        }

        comment = {
            id: newUUIDv4(),
            parentId: parentId || getFromPath(),
            timestamp: Date.now(),
            body: comment,
            author,
            voteScore: 1,
            deleted: false,
            parentDeleted: false
        }

        sendCommentToServer({comment});

        return {
            type: ADD_COMMENT,
            comment
        }
    } catch(err) {
        console.error('On setting posts: ', err);
    }
};

export const deleteComment = ({id}) => {
    try {
        setCommentAsDeleted({id});

        return {
            type: DELETE_COMMENT,
            id
        }
    } catch(err) {
        console.error('On setting posts: ', err);
    }
};