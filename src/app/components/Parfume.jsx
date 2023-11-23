"use client";

import Image from "next/image";
import { useState } from "react";

export default function Parfume(props) {
  
    const handleClick = () => {
      props.setType(props.gender.title);
      
    };
  return (
        <button 
        

        onClick={handleClick}  className={`flex flex-col items-center justify-around gap-8 hover:scale-125 rounded-lg transition-transform duration-200 ${props.type === props.gender.title && "outline bg-mantas-300 outline-mantas-300 outline-4 outline-offset-[-1px]"}`}>

          {/* <Image
            className={`  bg-matas-200  "}`}
            src="/next.svg" // Assuming next.svg is in the public directory
            width={150}
            height={150}
            alt="paco"
          /> */}
          <p className="text-7xl md:text-8xl lg:text-9xl">{props.gender.emoji}</p>
          <h2 className="text-center" >
             {props.gender.dansk} 
          </h2>
        </button>
  );
}