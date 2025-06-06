import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    <div className="slider-container group w-full max-w-6xl mx-auto py-8 rounded-2xl">
        {/* <h1 className=" text-4xl font-bold my-10">See our Work</h1> */}
        <p className="mx-auto my-12 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
           See our Work
          </p>
      <Slider {...settings} >
        {CardData.map((card, index) => (
          <div className="px-0.5">
            <div
            key={index}
            className=" max-w-sm rounded-3xl overflow-hidden shadow-lg"
            style={{ boxShadow: "inset 0 -55px 25px rgba(0,0,0,0.1)" }}
          >
            <img className="w-full h-90" src={card.img} alt="Sunset in the mountains" />
             {/* <div className="absolute inset-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-transform duration-150 flex items-center justify-center top-100">
    <p className="text-white text-lg font-semibold">Your Hover Text</p>
  </div> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {card.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          </div>
        ))}
      </Slider>


    </div>
  );
}

export default PauseOnHover;
