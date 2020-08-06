import axios from 'axios'

// Base URL's
const baseUrlTrump = 'https://tronalddump.io/random/quote'
const baseUrlKanye = 'https://api.kanye.rest'
// This API always returns a random quote


// Trump Requests
export const getSingleTrumpQuote = () => {
  return axios.get(`${baseUrlTrump}`)
}


// Kanye Requests
export const getSingleKanyeQuote = () => {
  return axios.get(`${baseUrlKanye}`)
}

// Function

// (1) Write a function to randomize the boolean (true or false)

function getRandom() {
  return Math.random() < 0.5
}

// Random Function

export const randomLine = (line) => {
  return line
}

let baseUrl = ''

export const getSingleQuote = () => {
  const isTrump = getRandom()
  console.log(isTrump)
  isTrump ? baseUrl = baseUrlTrump : baseUrl = baseUrlKanye
  let line = ''
  isTrump ? line = 'value' : line = 'quote'
  return axios.get(`${baseUrl}`)
}