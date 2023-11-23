"use client";

import Image from "next/image";
import { motion } from "framer-motion"
import { useState } from "react";

export default function Parfume(props) {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
      props.setType(props.gender);
    };
  return (
        <motion.button 
        
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        style={{border:`2px solid ${clicked ? "#44BDEE" : "transparent"}`}}

        onClick={handleClick}  className="flex flex-col items-center justify-around rounded-full p-3">

          <Image
            className="h-28 md:h-28 rounded-full p-4 bg-matas-200"
            src="/next.svg" // Assuming next.svg is in the public directory
            width={100}
            height={100}
            alt="paco"
          />
          <h2 className="text-center" >
             {props.gender} 
          </h2>
        </motion.button>
  );
}