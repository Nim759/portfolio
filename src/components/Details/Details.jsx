import "./Details.css";
import {Link} from "react-router-dom";
import React from 'react'

const Details = () => {
  return (
    <div className="details">
      <div className="card-container">
        <div className="card">
            <h3>- BASIC-</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>- 3 days -</p>
            <p>- 3 pages -</p>
            <p>- 3 Feactured -</p>
            <p>- 3 Responsive Design -</p>
            <Link to = "/Contact" className="btn">PURCHASE NOW</Link>

        </div>

        <div className="card">
            <h3>-PREMIUM-</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>- 3 days -</p>
            <p>- 3 pages -</p>
            <p>- 3 Feactured -</p>
            <p>- 3 Responsive Design -</p>
            <Link to = "/Contact" className="btn">PURCHASE NOW</Link>

        </div>

        <div className="card">
            <h3>- BUSINESS-</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>- 3 days -</p>
            <p>- 3 pages -</p>
            <p>- 3 Feactured -</p>
            <p>- 3 Responsive Design -</p>
            <Link to = "/Contact" className="btn">PURCHASE NOW</Link>

        </div>


      </div>
        
    </div>
  )
}

export default Details;