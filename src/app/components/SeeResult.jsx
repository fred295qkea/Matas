"use client"
import React, {useState} from "react"



export default function SeeResult() {
    const [effect, setEffect] = useState(false);
    return(
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="grid grid-rows-3 max-w-xs gap-10">
                <h2 className="row-start-1 items-center text-center text-mantas-500 font-bold text-4xl ">Så har vi fundet den perfekte duft til dig</h2> 
            <button
          className={`${ effect && "btn-animation"} row-start-2 row-end-4 rounded-full h-80 lg:h-96 w-80 lg:w-96 font-bold text-4xl bg-mantas-300 button-color hover:bg-mantas-400 hover:shadow-lg transform hover:scale-105 transition-transform duration-300`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)} // kan jeg putte min nextstep her
        >
          SMELL ME NOW!
        </button>
           </div>
        </div>
    )
}