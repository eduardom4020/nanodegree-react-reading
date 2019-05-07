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