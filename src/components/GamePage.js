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
    score: null,
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
    if (!this.endGame()) {
      const { trump, correctGuesses, totalGuesses } = this.state
      const answer = trump ? 'trump' : 'kanye'
      // console.log(this.state)
      return this.setState({ 
        totalGuesses: totalGuesses + 1, 
        trump: null, 
        kanye: null,
        correctGuesses: answer === e.target.value ? correctGuesses + 1 : correctGuesses,
        isCorrectTrump: answer === 'trump' ? true : false,
        isCorrectKanye: answer === 'kanye' ? true : false
      }, this.getData) 
    }
    return this.setState({ score: 'Finish game' })
  }

  displayScore = () => {
    this.setState({ trump: null, kanye: null, score: `Congrats, you scored: ${this.state.correctGuesses} / 10` })
  }

  endGame = () => {
    return this.state.totalGuesses === 10
  }

  checkQuote = (newQuote, newArray) => {
    // for (let i = 0; i < length; i++) { 
    //   console.log('This is running')
    //   return newQuote === newArray[i]
    // }
    return newArray.some(quote => {
      return quote === newQuote
    })
  }

  render() {
    const { trump } = this.state
    const { kanye } = this.state
    const { score } = this.state
    return (
      <section>
        <div className="wrapper-game">
          <div className="game-image">
            <img src={image} alt="logo" />
          </div>
          <div className="game-quote">
            { kanye }
            { trump }
            { score }
          </div>
          <div className="game-buttons">
            <div className={ `${this.state.score ? 'win-buttons' : ''}` }>
              <button onClick={this.handleGuess} className={`${this.state.isCorrectTrump ? 'correct' : ''}`} value="trump">Trump</button>
              <button onClick={this.handleGuess} className={`${this.state.isCorrectKanye ? 'correct' : ''}`} value="kanye">Kanye</button>
            </div>
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