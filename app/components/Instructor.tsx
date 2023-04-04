"use client"
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleBoxClick = (index:any) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full  mx-0 lg:mx-20">
        <div
        
          className={`box ${
            activeIndex === 0 ? "active" : ""
          } lg:h-96 hidden lg:visible lg:mt-2`}
          onClick={() => handleBoxClick(0)  }
        >
          <p>Box 1</p>
        </div>
        <div
          className={`box ${
            activeIndex === 0 ? "active" : ""
          }h-40`}
          onClick={() => handleBoxClick(0)}
        >
          <p><Image  alt="image"src="/sylani.jpg"/></p>
        </div>
        <div
          className={`box ${
            activeIndex === 1 ? "active" : ""
          } h-44 bg-sky-900`}
          onClick={() => handleBoxClick(1)}
        >
          <p><Image alt="image" src="piaic.jpg"className="lg:w-32 w-20"/></p>
        </div>
        <div
          className={`box ${
            activeIndex === 2 ? "active" : ""
          }h-40 `}
          onClick={() => handleBoxClick(2)}
        >
          <p><Image  alt="image"src="/pana.png" className="w-40"/></p>
        </div>
        <div
          className={`box ${
            activeIndex === 0 ? "active" : ""
          }lg:h-96 hidden lg:visible lg:mt-2`}
          onClick={() => handleBoxClick(0)}
        >
          <p>Box 1</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
