import Image from "next/image"

export default function Result(props) {
    return(
        <div className="flex items-center justify-center">
            <div className=" grid grid-cols-2">
                <div className="flex justify-around">
                    <div className="">
                    <Image
                className={`  rounded-xl  bg-matas-200 mix-blend-multiply }`}
                src={props.finalProduct?"/matas-scent/"+props.finalProduct[0].billede:""}// Assuming next.svg is in the public directory
                width={200}
                height={200}
                alt="paco"
            />
                    </div>
                </div>
                
                <div className="flex gap-4 items-center flex-col justify-between">
                        <h2 className="text-3xl">{props.finalProduct[0].navn} af {props.finalProduct[0].brand} </h2>
                        <div className="flex gap-3">
                            <p><strong>Duftnoter:</strong></p>
                            {props.finalProduct[0].duft.map((e)=>{
                              return(<p key={e} className="text-l">{e}</p>)  
                            })}
                        </div>
                        <p>Pris: {props.finalProduct[0].pris}kr.</p>
                        <div className="flex gap-4">
                        <button className="bg-mantas-500 px-8 py-3 rounded-full text-white text-lg hover:scale-110 transition-transform duration-200">Læg i kurv</button> 
                        <button className="bg-mantas-400 px-8 py-3 rounded-full text-white text-lg hover:scale-110 transition-transform duration-200"> Læs mere</button>
                    </div>
                </div>

            </div>
        </div>
    )
}