import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const fetchEvents = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/events`);
		console.log(response.data);
	} catch (error) {
		console.error('There was an error!', error);
	}
};

export default fetchEvents