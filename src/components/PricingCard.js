import "./PricingCardStyles.css"
import React from 'react'
import {Link} from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
        <div className="card">
           <h3>-Basic-</h3>
           <span className="bar"></span>
           <h1 className="btc">$100</h1>
           <p>- 3 days-</p>
           <p>-3 pages-</p>
           <p>- Featured -</p>
           <p>- Responsive Design -</p>
           <Link to="/contact" className="btn btnGrp">PURCHASE NOW</Link>
        </div>
        <div className="card">
           <h3>-Premium-</h3>
           <span className="bar"></span>
           <h1 className="btc">$200</h1>
           <p>- 2 days-</p>
           <p>-5 pages-</p>
           <p>- Featured -</p>
           <p>- Responsive Design -</p>
           <Link to="/contact" className="btn btnGrp">PURCHASE NOW</Link>
        </div>
        <div className="card">
           <h3>-Business-</h3>
           <span className="bar"></span>
           <h1 className="btc">$300</h1>
           <p>- 5 days-</p>
           <p>-8 pages-</p>
           <p>- Featured -</p>
           <p>- Responsive Design -</p>
           <Link to="/contact" className="btn btnGrp">PURCHASE NOW</Link>
        </div>
        </div>
    </div>
  )
}

export default PricingCard