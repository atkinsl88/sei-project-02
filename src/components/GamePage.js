import React from 'react'
import { Link  } from 'react-router-dom'
import { getSingleTrumpQuote, getSingleKanyeQuote, getSingleQuote, randomLine } from '../lib/api'

class GamePage extends React.Component {

  state = {
    trump: [],
    kanye: [],
    random: []
  }

  async componentDidMount() {
    try {

      const res = await getSingleTrumpQuote()
      console.log(res.data.value)
      this.setState({ trump: res.data.value })

      const resKanye = await getSingleKanyeQuote()
      console.log(resKanye.data.quote)
      this.setState({ kanye: resKanye.data.quote })

      // const resRandom = await getSingleQuote()
      // console.log(resRandom)
      // console.log(resRandom.data)
      // console.log(resRandom.data.randomLine(line))


      // const isTrump = this.handleRandom()
      // console.log(isTrump)
      // // const res = await getSingleKanyeQuote()
      // // console.log(res.data.quote)
      // const res = await isTrump ? getSingleTrumpQuote() : getSingleKanyeQuote() 
      // this.setState({ quote: res.data.quote })
      // console.log(res)

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { trump } = this.state
    const { kanye } = this.state
    const { random } = this.state
    return (
      <section>
        <div className="wrapper-game">
          <div className="game-image">
          </div>
          <div className="game-quote">
            <h2>Trump...</h2>
            { trump }
            <h2>Kanye...</h2>
            { kanye }
          </div>
          <div className="game-buttons">
            <button>Trump</button>
            <button>Kanye</button>
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