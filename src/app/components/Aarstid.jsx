import Image from "next/image";

export default function Aarstid(props) {
  return (
    <div className="grid grid-cols-2  gap-4 ">
        <button onClick={()=>props.setAarstid(props.aarstid)}  className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-mantas-200 duration-200 ... flex flex-col items-center justify-around ">
          <Image
            className="h-28 md:h-28 rounded-full p-4 bg-matas-200"
            src="/next.svg" // Assuming next.svg is in the public directory
            width={100}
            height={100}
            alt="paco"
            />
            <h2 className="text-center"> {props.aarstid}</h2>
        </button>
    </div>
        )
}