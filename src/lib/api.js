import axios from 'axios'

// Base URL's
const baseUrlTrump = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
const baseUrlKanye = 'https://api.kanye.rest'

// This API always returns a random quote
// Trump Requests
// export const getSingleTrumpQuote = () => {
//   return axios.get(`${baseUrlTrump}`)
// }
// Kanye Requests
// export const getSingleKanyeQuote = () => {
//   return axios.get(`${baseUrlKanye}`)
// }

const getRandom = () => {
  return Math.random() < 0.5
}

export const getSingleQuote = () => {
  const isTrump = getRandom()
  const baseUrl = isTrump ? baseUrlTrump : baseUrlKanye
  return axios.get(baseUrl)
}



/// From Cheese



// const getPayload = () => {
//   const token = getToken()
//   if (!token) return false
//   const parts = token.split('.')
//   if (parts.length < 3) return false
//   return JSON.parse(window.atob(parts[1]))
// }
// export const isAuthenticated = () => {
//   const payload = getPayload()
//   if (!payload) return false
//   const now = Math.round(Date.now() / 1000)
//   return now < payload.exp
// }