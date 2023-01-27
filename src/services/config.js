import axios from 'axios'

export const baseUrl = 'http://localhost:3000/' // link servidor local

export const http = axios.create({
  baseURL: baseUrl

})