import axios from 'axios'
import { baseUrl } from './config'

const service = axios.create({
    baseURL: baseUrl, // api base_url
    // baseURL: 'http://localhost:21181/', // api base_url
  
    timeout: 15000 // request timeout
  })

  export default service