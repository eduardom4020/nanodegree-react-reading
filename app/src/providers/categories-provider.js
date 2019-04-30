import axios from 'axios';

export const getAllCategories = async ({origin}) => {
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