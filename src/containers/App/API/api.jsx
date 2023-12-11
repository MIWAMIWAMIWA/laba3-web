import axios from 'axios';
export const getFilteredHeadphones = async ({ filterMode }) => {
    try {
        const response = await axios.get('http://localhost:8080/headphones/filtered', {
            params: {
                filterMode
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const getHeadphoneById = async ({id}) => {
    try {
        console.log(id)
        const response = await axios.get(`http://localhost:8080/headphones/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching headphones details:', error);
        throw error;
    }
};