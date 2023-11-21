import Parfume from "./Parfume"

export default function Step1(props) {
let genders = ["men","women","unisex"];
    return(
        <>
        <section className="w-11/12 md:w-10/12 lg:w-3/5 grid  h-4/5 bg-mantas-100 p-3 rounded-2xl shadow-lg">
        <h1 className="text-center">Hvem er det til ?</h1>
         <div className="flex justify-around items-center gap-6 m-8 flex-wrap"> 
         {/* <button onClick={()=>props.setType("men")}>Mænd</button>
        <button onClick={()=>props.setType("women")}>Kvinder</button> 
        <button onClick={()=>props.setType("unisex")}>Unisex</button>  */}
        {genders.map((gender)=>(
            <Parfume key={gender} setType={props.setType} gender={gender}/> 
        ))}
       
         </div> 
        
        <p className="text-center">steps</p>
        </section>


       {/* {props.data.map(d=><p>{d.navn}</p>)} */}
        </>
    )

    }