import Vibe from "./Vibe"

export default function Step3(props) {

    return(
        <>
            <section className="grid w-9/12 p-3 m-auto shadow-lg min-h-[80%] bg-mantas-100 rounded-2xl">
            <h3 className="text-center">Hvilket billede tiltaler dig mest</h3>
            {console.log(props.doneData)}
            <div className="flex flex-row flex-wrap justify-around">
            {props.doneData.map((single)=>(
            <p key={single.id}>{ single.vibeimg}</p>
            ))}
            </div>
            </section>


       {/* {props.data.map(d=><p>{d.navn}</p>)} */}
        </>
    )

    }