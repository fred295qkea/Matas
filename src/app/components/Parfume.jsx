import Image from "next/image";

export default function Parfume({ genders }) {
  return (
    <div className="flex justify-around items-center gap-6 m-8 flex-wrap">
      {genders.map((gender, index) => (
        <button key={index} className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-mantas-200 duration-200 ... flex flex-col items-center justify-around m-4">
          <Image
            className="h-28 md:h-28 rounded-full p-4 bg-matas-200"
            src="/next.svg" // Assuming next.svg is in the public directory
            width={100}
            height={100}
            alt="paco"
          />
          <h2 className="text-center" key={index}>
            {gender}
          </h2>
        </button>
      ))}
    </div>
  );
}