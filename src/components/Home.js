import React from 'react'
import { Link  } from 'react-router-dom'
import image from '../assets/kanye-trump.png'

const Home = () => (
  <section>
    <div className="wrapper-home">
      <div className="home-image">
        <img src={image} alt="logo" />
      </div>
      <div className="home-title">
        <h1>Trump vs. Kanye</h1>
      </div>
      <div className="home-text">
        <p>Trump and Kanye are notorious for having big mouths, so we thought it would be good to see how easy it would be to differentiate between these two ‘great minds’. Hit ‘Start’ to see how you get out of 10.</p>
        <p><span className="disclaimer">Disclaimer:</span> These quotes are offensive.</p>
        <p>Lots of Love,<br />Dicktatorship.</p>
      </div>
      <div className="home-button">
        <Link to={'/game'}><button>Start</button></Link>
      </div>
    </div>
  </section>
)

export default Home