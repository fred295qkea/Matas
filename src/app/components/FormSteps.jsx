"use client"

import Button from "./Button"

import { useState } from "react"

function FormSteps() {

    const [currentStep, setCurrentStep] = useState(0)

    const steps = [
    {
        id: "step 1",
        name: "Type",
        content: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus repellendus error nisi tenetur sapiente blanditiis expedita obcaecati numquam unde! Quia tenetur expedita soluta. Voluptatum amet eos impedit itaque consequatur?</p>
    },
    {
        id: "step 2",
        name: "Season",
        content: <p>hejsa</p>
    },
    {
        id: "step 3",
        name: "Smell",
        content: <p>hejsa casper</p>
    },
    {
        id: "step 4",
        name: "tease",
        content: <p>hejsa</p>
    },
    {
        id:"step 5",
        name: "result",
        content: <p>hejsa</p>
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

                {steps[currentStep].content}

        
       

        {currentStep === 0 ? <Button desc="left"/>:  <Button desc="left" setCurrentStep={setCurrentStep} currentStep={currentStep}/>}

        {currentStep === 4 ? <Button desc="right" /> : <Button desc="right" setCurrentStep={setCurrentStep} currentStep={currentStep}/>
}


    </div>
  )
}

export default FormSteps