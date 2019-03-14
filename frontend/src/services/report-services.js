import axios from 'axios'

const url = process.env.NODE_ENV !== "Production" ? "http://localhost:3000" : "https://lostpetsmexico.herokuapp.com";

export const createReport = data => {
	return axios.post(`${url}/flyer`, data)
};

export const searchByDescription = data => {
	console.log(data)
	return axios.get(`${url}/lost?description=${data}`)
}