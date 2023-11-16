import Parfume from "./Parfume"
export default function Parfumer() {
    return(
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <Parfume />
            <Parfume/>
            <Parfume/>
            <Parfume/>    
        </div>
        </>
    )
}