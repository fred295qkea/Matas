import Parfume from "./Parfume"

export default function Step1(props) {
let genders = ["men","women","unisex"];
    return(
        <section className=" grid gap-10 ">
        <h1 className="text-center">Hvem er det til ?</h1>
         <div className="flex justify-around items-center gap-6 m-8 flex-wrap"> 
        {genders.map((gender)=>(
            <Parfume key={gender} setFinalId={ props.setFinalId} setType={props.setType} gender={gender}/> 
        ))}
         </div> 
        </section>

    )

    }