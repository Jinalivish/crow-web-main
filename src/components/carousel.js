import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'bootstrap';
import './carousel.css'

const CarouselComponent = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile view
        settings: {
          slidesToShow: 1, // Show only one slide on mobile
        }
      }
    ]
  };

  return (
    <div className="container mx-auto ">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-4">
              {/* <a className="h-40 flex justify-center items-center"href={img.link}> */}
                <img  src={img.img} alt={`Slide ${index}`} className="w-full h-auto block" />
              {/* </a> */}
            
          </div>
        ))}
      </Slider>
</div>
    // <div id="myCarousel" className="carousel slide container mx-auto" data-bs-ride="carousel">
    //   <div className="carousel-inner">
    //     {images.map((img, index) => (
    //       <div key={index} className="carousel-item active">

    //         <a className="h-40 flex justify-center items-center"href={img.link}>
    //             <img  src={img.img} alt={`Slide ${index}`} className="d-block w-100" />
    //           </a> 
    //       </div>
    //     ))}
    //   </div>
    //   <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
}

export default CarouselComponent;