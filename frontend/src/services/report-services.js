import axios from 'axios'

const url = process.env.NODE_ENV !== "Production" ? "http://localhost:3000" : "tupinshidominio.com";

export const createReport = data => {
	axios.post(`${url}/`)
};