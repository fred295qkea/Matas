import React from "react"


export default function Step3(props) {

    return(
        <>
            <section  className="w-11/12 md:w-10/12 lg:w-3/5 grid  h-4/5 bg-mantas-100 p-3 rounded-2xl shadow-lg">
            <h3 className="text-center">Hvilket billede tiltaler dig mest</h3>
            
            {props.doneData.map((single)=>(
            
           
             <button key={single.id} onClick={()=>props.setFinalId(single.id)} >
                    <p>{single.id}</p>
                    <img  width="200px"  src={"/scent-profiles/"+single.vibeimg}/>
                </button>
          
               

          
            
           
            ))}
            </section>


       {/* {props.data.map(d=><p>{d.navn}</p>)} */}
        </>
    )

    }