import Parfume from "./Parfume"

export default function Step1(props) {

    return(
        <>
        <section className="w-11/12 md:w-10/12 lg:w-3/5 grid  h-4/5 bg-mantas-100 p-3 rounded-2xl shadow-lg">
        <h1 className="text-center">Hvem er det til ?</h1>
        <Parfume genders={props.genders}/>
        <p className="text-center">steps</p>
        </section>


        {props.data.map(d=><p>{d.navn}</p>)}
        </>
    )

    }