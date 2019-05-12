import { 
    SET_POSTS,
    ORDER_POSTS,
    ADD_POST,
    DELETE_POST,
    EDIT_POST
} from './types';

import { MainStore } from '../store/base-stores';
import { newUUIDv4 } from '../helpers/data-helpers';

import { 
    sendPostToServer, 
    setPostAsDeleted,
    editPostInServer
} from '../providers/posts-provider';

import { redirectTo } from '../helpers/history-helper';

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

export const orderPosts = (categoriesPaths, orderBy='voteScore', invert=false) => {
    // console.log('ON ORDERING POSTS', MainStore.getState())
    const targetsPosts = Object.values(MainStore.getState().posts);
    const POSTS = targetsPosts.filter(post => categoriesPaths.indexOf(post.category) >= 0);

    try {
        const postsOrder = POSTS.sort((post1, post2) => (
            post1[orderBy] > post2[orderBy] ?
                !invert ? -1 : 1
            : post1[orderBy] < post2[orderBy] ?
                !invert ? 1 : -1
            :
                0
        )).map(post => ({id: post.id, category: post.category}));
        
        // const postsOrder = [...postsOrdered, ...otherCategoriesPosts]

        return {
            type: ORDER_POSTS,
            postsOrder,
            orderBy: `${orderBy}${invert ? '-inverse' : ''}`,
            categoriesPaths
        }
    } catch(err) {
        console.error('On ordering posts: ', err);
    }
};

export const addPost = ({author, body, title, category}) => {
    try {
        if(!author) {
            throw 'Cannot add post without author'
        }

        if(!title) {
            throw 'Cannot add post without title'
        }

        if(!category) {
            throw 'Cannot add post without category'
        }

        const post = {
            id: newUUIDv4(),
            timestamp: Date.now(),
            title,
            body,
            author,
            category,
            voteScore: 1,
            deleted: false,
            commentCount: 0
        }

        sendPostToServer({post});

        return {
            type: ADD_POST,
            post
        }
    } catch(err) {
        console.error('On setting posts: ', err);
    }
};

export const deletePost = ({id}) => {
    try {
        setPostAsDeleted({id});
        
        return {
            type: DELETE_POST,
            id
        }
    } catch(err) {
        console.error('On setting posts: ', err);
    }
};

export const editPost = ({id, newTitle, newBody}) => {
    try {
        if(!id) {
            throw 'Cannot edit posts without id'
        }

        const post = {
            id, 
            title: newTitle, 
            body: newBody
        }

        editPostInServer({post});

        return {
            type: EDIT_POST,
            ...post
        }
    } catch(err) {
        console.error('On edit post: ', err);
    }
};