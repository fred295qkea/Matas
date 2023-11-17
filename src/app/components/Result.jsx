export default function Result() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-mantas-300">
            <div className=" grid grid-row-4 lg:rounded-full lg:bg-white full-circle"  >
                <div className="flex flex-col items-center justify-center ">
                    <div className="img-size bg-matas-500"><p className="flex justify-center">IMAGE HERE</p></div>
                    <p className=""> BRAND - PERFUME</p>
                </div>
                <div className="flex justify-center">
                    <button>Læg i kurv</button> 
                    <button>Læs mere</button>
                </div>

            </div>
        </div>
    )
}