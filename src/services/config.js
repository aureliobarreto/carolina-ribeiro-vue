import axios from 'axios'

export const baseUrl = 'http://localhost:3000/' // link servidor local

export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'application/json',
    // 'x-access-token': getToken()
  }

})