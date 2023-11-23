"use client";

import Image from "next/image";
import { color, motion } from "framer-motion"
export default function Aarstid(props) {
  return (
        <motion.button 
        
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        
        onClick={()=>props.setAarstid(props.aarstid)}  className=" flex flex-col items-center justify-around ">
          <Image
            className={`h-1/2 w-1/2 md:h-3/4 md:w-3/4 lg:h-full lg:w-full bg-matas-200 ${props.stateAarstid===props.aarstid && "outline outline-mantas-300 outline-4"}`}
            src="/next.svg" // Assuming next.svg is in the public directory
            width={150}
            height={150}
            alt="paco"
            />
            <h2 className="text-center"> {props.aarstid}</h2>

        </motion.button>
        )
}