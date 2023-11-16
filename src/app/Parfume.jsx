import Image from "next/image"
export default function arfume(){
    return(
        <div className="flex flex-col items-center justify-around">
            <Image className=" h-28 md:h-28rounded-full p-4 bg-matas-200"
            src="public/next.svg"
            width="100"
            height="100"
            alt="paco" />

            <h2 className="text-center">paco 1 million</h2>
        </div>
    )
}