import axios from 'axios';
import { ORIGIN } from '../constants/requests-constants';

export const getAllCategories = async (origin=ORIGIN) => {
    try {
        const {data} = await axios.get(
            `${origin}/categories`,
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