import Image from "next/image";

export default function Parfume({ genders }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
      {genders.map((gender, index) => (
        <button key={index} className="hover:bg-mantas-500 flex flex-col items-center justify-around ">
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