import React from 'react';
import './slider.css';
import basket from './basket.png';
import sl1 from './sl1.png';
import sl2 from './sl2.png';
import sl3 from './sl3.png';

const Slider = () => {
  return(
    <div className='slider'>
<p className='slp1'>fm</p>
<p className='slp2'>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
</p>
<img className='bk' src={basket} />
<p className='slp3'>Onboard Screens</p>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="ims d-block w-100" src={sl1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="ims d-block w-100" src={sl2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="ims d-block w-100" src={sl3} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    </div>
  )
}

export default Slider;