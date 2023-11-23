"use client";

import Image from "next/image";
import { motion } from "framer-motion"
export default function Aarstid(props) {
  return (
        <motion.button 
        
        // whileHover={{ scale: 1.2 }}
        // whileTap={{ scale: 1 }}
        
        onClick={()=>{
          props.setAarstid(props.aarstid.title)
          props.setFinalId("")}
          }  
          className= {`flex flex-col items-center justify-around gap-8 hover:scale-125 transition-transform duration-200 rounded-lg ${props.stateAarstid===props.aarstid.title && "outline bg-mantas-300 outline-mantas-300 outline-4 outline-offset-[-1px]"}`}>
          {/* <Image
            className="h-28 md:h-28 rounded-full p-4 bg-matas-200"
            src="/next.svg" // Assuming next.svg is in the public directory
            width={150}
            height={150}
            alt="paco"
            /> */}
            <p className="text-7xl md:text-8xl lg:text-9xl">{props.aarstid.emoji}</p>
            <h2 className="text-center hej"> {props.aarstid.dansk}</h2>

        </motion.button>
        )
}