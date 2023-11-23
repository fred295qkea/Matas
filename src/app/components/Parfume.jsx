"use client";

import Image from "next/image";
import { useState } from "react";

export default function Parfume(props) {
  
    const handleClick = () => {
      props.setType(props.gender);
      
    };
  return (
        <button 
        

        onClick={handleClick}  className="flex flex-col items-center justify-around gap-8 hover:scale-125 transition-transform duration-200">

          <Image
            className={`  bg-matas-200  ${props.type === props.gender && "outline outline-mantas-300 outline-4"}`}
            src="/next.svg" // Assuming next.svg is in the public directory
            width={150}
            height={150}
            alt="paco"
          />
          <h2 className="text-center" >
             {props.gender} 
          </h2>
        </button>
  );
}