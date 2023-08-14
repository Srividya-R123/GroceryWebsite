import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css';
const BannerSlider = () => {
  const data = [
    {
  id:1,
  image:"https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
  title:"From Farm to Table: Freshness Delivered to Your Doorstep!",
  description:"Harvesting Nature's Goodness, Straight to Your Kitchen",
  button:"https://www.google.com"

},{
  id:2,
  image:"https://media.istockphoto.com/id/1297109239/photo/healthy-vegetable-diet-salad-in-a-plate-on-a-wooden-dark-background.jpg?s=612x612&w=0&k=20&c=jH8tbNlQnypJt5tuVS7AvjaaPeFXK85LTgkDucaJIiQ=",
  title:"From Farm to Table: Freshness Delivered to Your Doorstep!",
  description:"Elevate Your Plate with Produce That's Plucked with Care",
  button:"https://www.google.com"
},
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 2500,
    cssEase: 'linear',
  };

  return (
    <div className="bs">
      <Slider {...settings}>
        {data.map((item) => (
          <div className='imagecont' key={item.id}>
<img src={item.image} alt='noimg' />
<div className='content'>
    <h1>{item.title}</h1>
    <span>{item.description}</span>
    <button>Shop Now</button>
</div>
</div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
