import React from 'react'
import './carousel.scss';
export default function Carousel() {
  return (
    <div
    id="carouselExampleInterval"
    className="carousel slide"
    data-mdb-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active " data-mdb-interval={10000}>
       <div className='imgss'>
       <img
       style={{width:'200px',height:'460px'}}
          src="https://www.universal-solder.ca/wp-content/uploads/2018/09/arduino_pro_mini_5v_16mhz_2.jpg"
          className="d-block w-100"
          alt="Wild Landscape"
        />
       </div>
      </div>
      <div className="carousel-item " data-mdb-interval={2000}>
       <div className='imgss'>
       <img style={{width:'200px',height:'460px'}}
          src="http://blog.tkjelectronics.dk/wp-content/uploads/2011/11/arduino-due.jpg"
          className="d-block w-100 " 
          alt="Camera"
        />
       </div>
      </div>
      <div className="carousel-item ">
       <div className='imgss'>
       <img style={{width:'200px',height:'460px'}}
          src="https://a.pololu-files.com/picture/0J7809.1200.jpg?850a881438dfb6ccf618b526e773c4d3"
          className="d-block w-100 "
          alt="Exotic Fruits"
        />
       </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      data-mdb-target="#carouselExampleInterval"
      type="button"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      data-mdb-target="#carouselExampleInterval"
      type="button"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}
