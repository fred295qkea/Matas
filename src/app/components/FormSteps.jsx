"use client"

import { useState } from "react"

function FormSteps() {

    const [currentStep, setCurrentStep] = useState(0)

    const steps = [
    {
        id: "step 1",
        name: "Type"
    },
    {
        id: "step 2",
        name: "Season"
    },
    {
        id: "step 3",
        name: "Smell"
    },
    {
        id: "step 4",
        name: "tease"
    },
    {
        id:"step 5",
        name: "result"
    }
    ]



  return (
    <div>
        <ul role="list" className="flex justify-evenly">
            {steps.map((step, index)=>(

                currentStep >= index ? 

                     <li className=" text-mantas-300" key={step.id}>
                        Du er på {step.id}, {step.name}
                    </li>
                    :
                         <li className="" key={step.id}>
                        Du er på {step.id}, {step.name}
                    </li>
            ))}
        </ul>

        {currentStep === 0 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus repellendus error nisi tenetur sapiente blanditiis expedita obcaecati numquam unde! Quia tenetur expedita soluta. Voluptatum amet eos impedit itaque consequatur?</p>}
        {currentStep === 1 && <p>hejsa</p>}

        {currentStep === 2 && <h2 className="bg-white">Step 3</h2>}

        
        {currentStep === 0 ? <button>Prev</button> : <button onClick={()=>(setCurrentStep(oldStep => oldStep-1))}>Prev</button>}

        
        
        {currentStep === steps.length ? <button>Next</button> : <button onClick={()=>(setCurrentStep(oldStep => oldStep+1))}>next</button>}


    </div>
  )
}

export default FormSteps