import { 
    VOTE_ON_POST,
    VOTE_ON_COMMENT
} from './types';

import { vote as sendPostVoteToServer } from '../providers/posts-provider';

export const voteOnPost = (postId, voteType, voteClass='normal') => {
    try {
        const score = (voteType === 'like' ? 1 : -1) * (
            voteClass === 'normal' ? 
                1
            :
                0
        );

        sendPostVoteToServer({id: postId, voteType});

        return {
            type: VOTE_ON_POST,
            postId,
            score
        }
    } catch(err) {
        console.error('On voting post: ', err);
    }
}

export const voteOnComment = (commentId, voteType, voteClass='normal') => {
    try {
        const score = (voteType === 'like' ? 1 : -1) * (
            voteClass === 'normal' ? 
                1
            :
                0
        );

        return {
            type: VOTE_ON_COMMENT,
            commentId,
            score
        }
    } catch(err) {
        console.error('On voting comment: ', err);
    }
}