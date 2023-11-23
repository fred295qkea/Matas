import Image from "next/image";

export default function Aarstid(props) {
  return (
    <div className="">
        <button onClick={()=>props.setAarstid(props.aarstid)}  className="flex flex-col items-center justify-around transition duration-200 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-mantas-200 focus:bg-red-600">
          <Image
            className="p-4 rounded-full h-28 md:h-28 bg-matas-200"
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