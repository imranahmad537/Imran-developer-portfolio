import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const Achievements = () => {
    
  var settings = {
   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const CardData = [
    {
      title: "Project 1",
      // img: "/Capture.PNG",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0Ez4tSCoI3bYCu-XvswB1mgC1ZlljUB8rw&s",
      description: "This is a description of project 1",
      tags: ["#React"],
    },
    {
      title: "Project 2",
      // img: "/Capture.PNG",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0Ez4tSCoI3bYCu-XvswB1mgC1ZlljUB8rw&s",
      description: "This is a description of project 1",
      tags: ["#React"],
    },
    {
        title: "Project 3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0Ez4tSCoI3bYCu-XvswB1mgC1ZlljUB8rw&s",
        description: "This is a description of project 1",
        tags: ["#React"],
      },
      {
        title: "Project 4",
        // img: "/Capture.PNG",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0Ez4tSCoI3bYCu-XvswB1mgC1ZlljUB8rw&s",
        description: "This is a description of project 1",
        tags: ["#React"],
      },
  ];
  return (
     <div className="slider-container w-full max-w-6xl mx-auto py-8 px-8 rounded-2xl  ">
        {/* <h1 className=" text-4xl font-bold my-10">See our Work</h1> */}
        <p className="mx-auto my-12 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl ">
           Achivements
          </p>
     <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>


    </div>
  )
}

export default Achievements
