"use client";

import Image from "next/image";
import { color, motion } from "framer-motion"
export default function Aarstid(props) {
  return (
        <motion.button 
        
        // whileHover={{ scale: 1.2 }}
        // whileTap={{ scale: 1 }}
        
        onClick={()=>{
          props.setAarstid(props.aarstid.title)
          props.setFinalId("")}
          }  
          className=" flex flex-col items-center justify-around hover:scale-125 transition-transform duration-200 ">
          {/* <Image
            className="h-28 md:h-28 rounded-full p-4 bg-matas-200"
            src="/next.svg" // Assuming next.svg is in the public directory
            width={100}
            height={100}
            alt="paco"
            /> */}
            <p className="text-8xl">{props.aarstid.emoji}</p>
            <h2 className="text-center hej"> {props.aarstid.dansk}</h2>

        </motion.button>
        )
}