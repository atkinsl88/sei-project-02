import React from 'react'
import { Link  } from 'react-router-dom'
import { getSingleQuote } from '../lib/api'
import image from '../assets/kanye-trump.png'

class GamePage extends React.Component {

  state = {
    trump: null,
    kanye: null,
    quoteArray: [],
    totalGuesses: 0,
    correctGuesses: 0,
    isCorrectTrump: false,
    isCorrectKanye: false
  }

  getData = async () => {
    try {
      const resRandom = await getSingleQuote()
      const newQuote = (resRandom.data.message || resRandom.data.quote)
      const newArray = [...this.state.quoteArray, newQuote]
      if (!this.checkQuote(newQuote, this.state.quoteArray)) {
        return this.setState({ 
          trump: resRandom.data.message, 
          kanye: resRandom.data.quote, 
          isCorrectTrump: false, 
          isCorrectKanye: false, 
          quoteArray: newArray 
        })
      } 
      return this.getData()
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getData()
  }

  handleGuess = (e) => {
    const { trump, correctGuesses, totalGuesses } = this.state
    const answer = trump ? 'trump' : 'kanye'
    return this.setState({ 
      totalGuesses: totalGuesses + 1, 
      trump: null, 
      kanye: null,
      correctGuesses: answer === e.target.value ? correctGuesses + 1 : correctGuesses,
      isCorrectTrump: answer === 'trump' ? true : false,
      isCorrectKanye: answer === 'kanye' ? true : false
    }, this.getData)
  }

  checkQuote = (newQuote, newArray) => {
    return newArray.some(quote => {
      return quote === newQuote
    })
  }

  generateInsult = (correctGuesses) => {
    if (correctGuesses > 7) {
      return 'Takes a Dicktator to know a Dicktator'
    } else if (correctGuesses > 3) {
      return 'Not bad, you could know your Dicktators better'
    }
    return 'You do not know your Dicktators, you need to get onto Twitter more'
  }

  render() {
    const { trump, kanye, totalGuesses, correctGuesses, isCorrectTrump, isCorrectKanye } = this.state
    return (
      <section>
        <div className="wrapper-game">
          <div className="game-image">
            <img src={image} alt="logo" />
          </div>
          <div>
            {totalGuesses < 10 ? 
              <>
                <div className="game-quote">
                  <p>{kanye}{trump}</p>
                </div>
                <div className="game-buttons">
                  <button onClick={this.handleGuess} className={`${isCorrectTrump ? 'correct' : ''}`} value="trump">Trump</button>
                  <button onClick={this.handleGuess} className={`${isCorrectKanye ? 'correct' : ''}`} value="kanye">Kanye</button>
                </div>
              </>
              :
              <div className="game-quote">
                <p> {this.generateInsult(correctGuesses)} {correctGuesses}/{totalGuesses}</p>
              </div>
            }
          </div>
          <div className="game-restart">
            <Link to={'/'}><button>Restart</button></Link>
          </div>
        </div>
      </section>
    )
  }
}

export default GamePage