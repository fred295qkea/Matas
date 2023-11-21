import Vibe from "./Vibe"

export default function Step3(props) {

    return(
        <>
            <section className="w-11/12 md:w-10/12 lg:w-3/5 grid  h-4/5 bg-mantas-100 p-3 rounded-2xl shadow-lg">
            <h3 className="text-center">Hvilket billede tiltaler dig mest</h3>
            {console.log(props.doneData)}
            {props.doneData.map((single)=>(
            <p key={single.id}>{ single.vibeimg}</p>
            ))}
            </section>


       {/* {props.data.map(d=><p>{d.navn}</p>)} */}
        </>
    )

    }