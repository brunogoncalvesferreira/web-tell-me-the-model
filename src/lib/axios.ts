import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://apitm.apis-vortice.online',
  // baseURL: 'http://localhost:3000',
  //baseURL: 'https://api-tm3d.onrender.com',
  withCredentials: true,
})

export const fetchURL = 'https://apitm.apis-vortice.online'
// export const fetchURL = 'http://localhost:3000'
//export const fetchURL = 'https://api-tm3d.onrender.com'
