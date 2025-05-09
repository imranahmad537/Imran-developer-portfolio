import React from "react";
import Cards from "../Components/Cards";
import Capture from "/Capture.PNG";
import { Heart, MessageCircle, Share2 } from "react-feather";


const Project = () => {
  return (
    <>
    <main className="flex justify-center items-center h-screen bg-black gap-5 p-4">
    <Cards imgSrc={Capture}>
        <h3 className="text-xl font-bold mb-2">Project 1</h3>
        <p>Lorem ipsum dolor sit.</p>
        <div className=" mt-4 flex justify-between">
        <div className="space-x-4">
          <button>
          <Heart/>
          </button>
          
          <button>
            <Share2/>
          </button>
          <button>
          <MessageCircle/>
          </button>
        </div>
        <div>
          
        </div>
      </div>
      </Cards>
      <Cards imgSrc={Capture}>
        <h3 className="text-xl font-bold mb-2">Project 1</h3>
        <p className="hidden md:block">Lorem ipsum dolor sit.Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit</p>
        <div className=" mt-4 flex justify-between">
        <div className="space-x-4">
          <button>
          <Heart/>
          </button>
          
          <button>
            <Share2/>
          </button>
          <button>
          <MessageCircle/>
          </button>
        </div>
        <div>
          
        </div>
      </div>
      </Cards>
     
     
    </main>
     
    </>
  );
};

export default Project;
