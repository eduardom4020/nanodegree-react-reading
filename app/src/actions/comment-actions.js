import { 
    SET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT
} from './types';

import { getFromPath } from '../helpers/url-helpers';
import { newUUIDv4 } from '../helpers/data-helpers';

// import { MainStore } from '../store/base-stores';
import { 
    sendCommentToServer, 
    setCommentAsDeleted,
    editCommentInServer
} from '../providers/comments-provider';

export const setComments = (inputComments={}) => {
    try {
        const commentsArray = inputComments.constructor === Array && inputComments;
        const treatedComments = commentsArray && commentsArray.length > 0 && (
            commentsArray.map(comment => ({[comment.id]: comment}))
                .reduce((acc, curr) => ({...acc, ...curr}))
        );
        const comments = treatedComments || inputComments;

        return {
            type: SET_COMMENTS,
            comments
        }
    } catch(err) {
        console.error('On setting comments: ', err);
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
        console.error('On add comment: ', err);
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
        console.error('On delete comment: ', err);
    }
};

export const editComment = ({id, newComment}) => {
    try {
        if(!id) {
            throw 'Cannot edit comments without id'
        }

        const comment = {
            id,
            // timestamp: Date.now(),
            body: newComment
        }

        editCommentInServer({comment});

        return {
            type: EDIT_COMMENT,
            comment
        }
    } catch(err) {
        console.error('On edit comment: ', err);
    }
};