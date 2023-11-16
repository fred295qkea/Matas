export default function Result() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-mantas-300">
            <div className=" grid grid-row-4 lg:rounded-full lg:bg-matas-100 full-circle"  >
                <div className="flex flex-wrap justify-center my-12">
                    <div className="img-size bg-matas-500"><p className="flex justify-center">IMAGE HERE</p></div>
                    <p className="">PROPS PROPS PROPS OR SMTH</p>
                </div>
                <div>
                    <button>Læg i kurv</button> 
                    <button>Læs mere</button>
                </div>

            </div>
        </div>
    )
}