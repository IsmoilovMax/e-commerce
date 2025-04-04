import axios from "axios"

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL 
console.log("BACKEND_URL:", BACKEND_URL)

export const axiosClient = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true
})




//interceptors
// axiosClientComponent.interceptors.request.use((config) => {
//   // const token = localStorage.getItem("token")
//   // if (token) {
//   //   config.headers.Authorization = `Bearer ${token}`
//   // }
//   return config
// })

