import { 
    SET_POSTS,
    ORDER_POSTS,
    VOTE
} from './types';

export const setPosts = (POSTS=[]) => {
    try {
        const preTreatedPosts = POSTS.reduce((acc, curr) => ([...acc, ...curr]));
        const treatedPosts = preTreatedPosts.map(post => ({[post.id]: {...post}}));
        const posts = treatedPosts.reduce((acc, curr) => ({...acc, ...curr}));
        
        return {
            type: SET_POSTS,
            posts
        }
    } catch(err) {
        console.error('On setting posts: ', err);
    }
};

export const orderPosts = (POSTS=[], orderBy='voteScore') => {
    try {
        const postsOrder = POSTS.sort((post1, post2) => (
            post1[orderBy] > post2[orderBy] ?
                -1
            : post1[orderBy] < post2[orderBy] ?
                1
            :
                0
        )).map(post => ({id: post.id, category: post.category}));
        
        return {
            type: ORDER_POSTS,
            postsOrder
        }
    } catch(err) {
        console.error('On ordering posts: ', err);
    }
};

export const vote = (postId, voteType, voteClass='normal') => {
    try {
        const score = (voteType === 'like' ? 1 : -1) * (
            voteClass === 'normal' ? 
                1
            :
                0
        );

        return {
            type: VOTE,
            postId,
            score
        }
    } catch(err) {
        console.error('On voting: ', err);
    }
}