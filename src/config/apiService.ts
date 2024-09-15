import axios, { AxiosError } from 'axios';

const postRequest = async (url: string, payload: unknown, token: string | null = null) => {
    try {
        // Set up headers, including the Authorization header if a token is provided
        const headers: { [key: string]: string } = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        // Make the POST request
        const response = await axios.post(url, payload, { headers });

        // Return the response data
        return response.data;
    } catch (error) {
        // Narrow down the error type to AxiosError
        if (error instanceof AxiosError) {
            console.error('Error during API call:', error.response?.data || error.message);
            throw error.response?.data || error.message;
        } else {
            console.error('Unexpected error during API call:', error);
            throw error;
        }
    }
};

export { postRequest };
