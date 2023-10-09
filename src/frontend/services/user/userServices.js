import api from "../api";

export class userServices {
	static async registerUser(user) {
		try {
			const response = await api.post('/register', user)
			return response 
		} catch (error) {
			throw new Error("user não cadastrado");
		}
	}
}