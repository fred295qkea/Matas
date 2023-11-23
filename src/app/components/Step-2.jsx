import Aarstid from "./Aarstid"

export default function Step2(props) {
    let aarstider = ["summer", "winter", "spring", "fall"];

    return(
        <>
        <section className="w-11/12 md:w-10/12 lg:w-3/5 grid  h-4/5 bg-mantas-100 p-3 rounded-2xl shadow-lg">
            <h1 className="text-center">Hvilken årstid passer bedst til den parfume, du ønsker ?</h1>
            {aarstider.map((aarstid)=>(
            <Aarstid key={aarstid} setAarstid={props.setAarstid} aarstid={aarstid}/> 
        ))}
        
            <p className="text-center">steps</p>
        </section>
        </>
    )

    }