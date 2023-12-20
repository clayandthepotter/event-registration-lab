import axios from 'axios';

const fetchEvents = async () => {
  axios
		.get('/')
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error('There was an error!', error);
		});
}