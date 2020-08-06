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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta commodo elementum. Fusce hendrerit interdum mauris, et gravida sem vestibulum aliquam. Phasellus aliquam, augue ac tempus bibendum, urna odio aliquet nunc, id mattis erat ipsum et elit.</p>
      </div>
      <div className="home-button">
        <Link to={'/game'}><button>Start</button></Link>
      </div>
    </div>
  </section>
)

export default Home