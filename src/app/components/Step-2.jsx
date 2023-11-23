import Aarstid from "./Aarstid"

export default function Step2(props) {
    let aarstider = ["summer", "winter", "spring", "fall"];

    return(
        <section className=" grid gap-10">
            
            <h1 className="text-center">Hvilken årstid passer bedst til den parfume, du ønsker ?</h1>
            <div className="flex justify-around items-center gap-5 m-8 flex-wrap"> 
            {aarstider.map((aarstid)=>(
            <Aarstid key={aarstid} setAarstid={props.setAarstid} stateAarstid={props.stateAarstid} aarstid={aarstid}/> 
        ))}
            </div>
        </section>
 
    )

    }