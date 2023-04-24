import React, {Fragment, useState} from 'react'
import "../../styles/Pricing.scss";

export const AppPricing = () => {

  const [duration, setDuration] = useState("Month");
  const [price, setPrice] = useState(5)
  const [month, setMonth] = useState(true);
  const [year, setYear] = useState(false);
  

  const setAnnualPrice =()=>{
    setDuration("Year");
    setPrice(50);
    setYear(true)
    setMonth(false)
   
  }

  const setMonthPrice =()=>{
    setDuration("Month");
    setPrice(5);
    setMonth(true)
    setYear(false)

  }


  return (
    <Fragment>
<section className='pricing_component'>
<div className='pricing_header'>
    <h2>Pricing</h2>
    <p>Maintain your recipe form anywhere. Add new recipes</p>
</div>

<div className='price_switch'>
<button className={`monthly_btn ${month ? 'active' : 'inactive'}`} onClick={setMonthPrice}>Montly</button>  
<button className={`yearly_btn ${year ? 'active' : 'inactive'}`} onClick={setAnnualPrice}>Yearly</button>    
</div>

<div className='pricing_card_container'>
<div className='pricing_card free_card'>
<h4>Free</h4>
<p className='duration'>1 Month Trail</p>
<p className=' price_container price'>$0</p>
<ul className='price_list_container'>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
</ul>
<div className='pricing_btn_container'>
<button>Get Started</button>
</div>
</div>

<div className='pricing_card premium_card'>
<h4>Premium</h4>
<p className='duration'>1 Month free</p>
<p className="price_container"><span className='price'>${price}  </span> per <span>{duration}</span></p>
<ul className='price_list_container'>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
<li className="pricing_item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
</ul>
<div className='pricing_btn_container'>
<button>Get Started</button>
</div>
</div>


</div>
</section>
    </Fragment>
  )
}
