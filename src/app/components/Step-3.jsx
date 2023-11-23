import React from "react"
import Image from "next/image"

export default function Step3(props) {

    return(
        <>
            <section  className="grid gap-10">
            <h3 className="text-center">Hvilket billede tiltaler dig mest </h3>
            
            <div className="flex justify-around items-center gap-5 m-8 flex-wrap">
            {props.doneData.map((single)=>(
            
           
             <button className="flex justify-center" key={single.id} onClick={()=>props.setFinalId(single.id)} >
                    
                    <Image
                        className={` h-1/2 w-1/2 md:h-3/4 md:w-3/4 lg:h-full lg:w-full  rounded-xl  bg-matas-200 ${props.finalId===single.id && "outline outline-mantas-300 outline-4"}`}
                        src={"/scent-profiles/"+single.vibeimg}// Assuming next.svg is in the public directory
                        width={150}
                        height={150}
                        alt="paco"
            />
                </button>
          
               

          
            
           
            ))}
            </div>
            </section>


       {/* {props.data.map(d=><p>{d.navn}</p>)} */}
        </>
    )

    }