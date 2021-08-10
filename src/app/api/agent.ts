import axios, { AxiosResponse } from 'axios'
import { Pizza } from '../models/Pizza'

axios.defaults.baseURL = 'http://localhost:8080/api/1.0'

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Pizzas = {
    list: () => requests.get('/pizzas'),
    create: (pizza: Pizza) => requests.post('/pizzas', pizza),
    update: (pizza: Pizza) => requests.put('/pizzas', pizza),
    delete: (id: number) => requests.delete(`/pizzas/${id}`),
}

const agent = {
    Pizzas,
}

export default agent
