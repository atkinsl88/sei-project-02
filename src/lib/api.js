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


