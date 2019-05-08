import axios from 'axios';
import { ORIGIN } from '../constants/requests-constants';

export const getCommentsByPost = async ({ post }, origin=ORIGIN) => {
    try {
        const {data} = await axios.get(
            `${origin}/posts/${post}/comments`,
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

export const sendCommentToServer = async ({ comment }, origin=ORIGIN) => {
    try {
        const {data} = await axios.post(
            `${origin}/comments`,
            {
                id: comment.id,
                timestamp: comment.timestamp,
                body: comment.body,
                author: comment.author,
                parentId: comment.parentId
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

export const setCommentAsDeleted = async ({ id }, origin=ORIGIN) => {
    try {
        const {data} = await axios.delete(
            `${origin}/comments/${id}`,
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