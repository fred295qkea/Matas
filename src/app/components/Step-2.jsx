import Aarstid from "./Aarstid"
export default function Step2(props) {
    let aarstider = ["summer", "winter", "autumn", "fall"];

    return(

        <>
        <section className="grid w-9/12 p-3 m-auto shadow-lg min-h-[80%] bg-mantas-100 rounded-2xl">
            <h1 className="text-center">Hvilken årstid passer bedst til den parfume, du ønsker ?</h1>
            <div className="grid grid-cols-2 m-8 place-items-center lg:grid-cols-4">
            {aarstider.map((aarstid)=>(
            <Aarstid key={aarstid} setAarstid={props.setAarstid} aarstid={aarstid}/> 
        ))}
            </div>
        
            <p className="text-center">steps</p>
        </section>
        </>
    )

    }