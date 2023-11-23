import React from "react"


export default function Step3(props) {

    return(
        <>
            <section  className="grid gap-10">
            <h3 className="text-center">Hvilket billede tiltaler dig mest</h3>
            
            <div className="flex justify-around items-center gap-5 m-8 flex-wrap">
            {props.doneData.map((single)=>(
            
           
             <button  key={single.id} onClick={()=>props.setFinalId(single.id)} >
                    <p>{single.id}</p>
                    <img  width="200px"  src={"/scent-profiles/"+single.vibeimg}/>
                </button>
          
               

          
            
           
            ))}
            </div>
            </section>


       {/* {props.data.map(d=><p>{d.navn}</p>)} */}
        </>
    )

    }