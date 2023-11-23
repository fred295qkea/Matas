import Aarstid from "./Aarstid"

export default function Step2(props) {
     let aarstider = [{title:"spring", emoji:"🌱",dansk:"Forår"}, {title:"summer", emoji:"☀️",dansk:"Sommer"},{title:"fall", emoji:"🍃",dansk:"Efterår"},{title:"winter", emoji:"❄️",dansk:"Vinter"}];
    // let aarstider = ["summer", "winter", "spring", "fall"];
    return(
        <section className=" grid gap-10">
            
            <h1 className="text-center">Hvilken årstid passer bedst til den parfume, du ønsker ?</h1>
            <div className="flex justify-around items-center gap-5 m-8 flex-wrap"> 
            {aarstider.map((aarstid)=>(
            <Aarstid key={aarstid} setAarstid={props.setAarstid} stateAarstid={props.stateAarstid} setFinalId={props.setFinalId} aarstid={aarstid}/> 
        ))}
            </div>
        </section>
 
    )

    }