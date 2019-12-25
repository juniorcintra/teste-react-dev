import { http } from './http'

export const fetchProducts = user => http.get(`products/index.json`)