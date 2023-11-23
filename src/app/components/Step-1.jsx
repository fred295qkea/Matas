import Parfume from "./Parfume"

export default function Step1(props) {
let genders = ["men","women","unisex"];
    return(
        <>
        <section className="grid w-9/12 p-3 m-auto shadow-lg min-h-[80%] bg-mantas-100 rounded-2xl">
        <h1 className="text-center">Hvem er det til ?</h1>
         <div className="flex flex-wrap items-center justify-around gap-6 m-8"> 
         {/* <button onClick={()=>props.setType("men")}>Mænd</button>
        <button onClick={()=>props.setType("women")}>Kvinder</button> 
        <button onClick={()=>props.setType("unisex")}>Unisex</button>  */}
        {genders.map((gender)=>(
            <Parfume key={gender} setType={props.setType} type={props.type} gender={gender}/> 
        ))}
       
         </div> 
        
        <p className="text-center">steps</p>
        </section>


       {/* {props.data.map(d=><p>{d.navn}</p>)} */}
        </>
    )

    }