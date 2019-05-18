import axios from 'axios';
import { ORIGIN } from '../constants/requests-constants';

export const getPostsByCatagory = async ({category}, origin=ORIGIN) => {
    try {
        const {data} = await axios.get(
            `${origin}/${category}/posts`,
            {
                headers: {
                    'Authorization': 'random-token'
                }
            }
        );

        return data;
    } catch(e) {
        console.log('ERROR: ', e);
        return null;
    }
}

export const sendPostToServer = async ({ post }, origin=ORIGIN) => {
    try {
        const {data} = await axios.post(
            `${origin}/posts`,
            post,
            {
                headers: {
                    'Authorization': 'random-token'
                }
            }
        );

        return data;
    } catch(e) {
        console.log('ERROR: ', e);
        return null;
    }
}

export const setPostAsDeleted = async ({ id }, origin=ORIGIN) => {
    try {
        const {data} = await axios.delete(
            `${origin}/posts/${id}`,
            {
                headers: {
                    'Authorization': 'random-token'
                }
            }
        );

        return data;
    } catch(e) {
        console.log('ERROR: ', e);
        return null;
    }
}

export const editPostInServer = async ({ post }, origin=ORIGIN) => {
    try {
        const {data} = await axios.put(
            `${origin}/posts/${post.id}`,
            {
                body: post.body,
                title: post.title
            },
            {
                headers: {
                    'Authorization': 'random-token'
                }
            }
        );

        return data;
    } catch(e) {
        console.log('ERROR: ', e);
        return null;
    }
}

export const vote = async ({ id, voteType }, origin=ORIGIN) => {
    try {
        const {data} = await axios.post(
            `${origin}/posts/${id}`,
            {
                option: (voteType === 'like' && 'upVote') ||
                    (voteType === 'unlike' && 'downVote')
            },
            {
                headers: {
                    'Authorization': 'random-token'
                }
            }
        );

        return data;
    } catch(e) {
        console.log('ERROR: ', e);
        return null;
    }
}