import axios from 'axios'

const baseUrlTrump = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
const baseUrlKanye = 'https://api.kanye.rest'

const getRandom = () => {
  return Math.random() < 0.5
}

export const getSingleQuote = () => {
  const isTrump = getRandom()
  const baseUrl = isTrump ? baseUrlTrump : baseUrlKanye
  return axios.get(baseUrl)
}


