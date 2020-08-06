import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID HnOiAEceExZZRYzfDrX7kXd-PW3KGQRmiw3O0SBJCIs'
	}
});
