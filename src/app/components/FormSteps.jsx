"use client"

import Button from "./Button"

import { useState } from "react"
import Step1 from "./Step-1";
import Step2 from "./Step-2";

function FormSteps(props) {

    const [currentStep, setCurrentStep] = useState(0)
   
    // de useState vi bruger til at filtrere 
    const [aarstid, setAarstid] = useState("");
    const [type, setType] = useState("");

    let doneData = props.data;
    if (type) {
        doneData = props.data.filter((e)=>e.gender === type)
    }
    if(aarstid) {
        doneData = doneData.filter((e)=>e.aarstid.includes(aarstid));
    }
    const steps = [
    {
        id: "step 1",
        name: "Type",
        content:  <div>
        {/* <button onClick={()=>setType("men")}>Mænd</button>
        <button onClick={()=>setType("women")}>Kvinder</button> 
        <button onClick={()=>setType("unisex")}>Unisex</button>  */}
        <h1>{type}</h1>
        <Step1 data={props.data} setType={setType}/>
        
        </div>
        
    },
    {
        id: "step 2",
        name: "Season",
        content:  <div>
        <button onClick={()=>setAarstid("summer")}>Sommer</button>
        <button onClick={()=>setAarstid("spring")}>Forår</button> 
        <button onClick={()=>setAarstid("winter")}>Vinter</button>
        <button onClick={()=>setAarstid("fall")}>Efterår</button>
        <h1>{aarstid}</h1>
        <Step2/>
        </div>
    },
    {
        id: "step 3",
        name: "Smell",
        content:  <button onClick={()=> console.log(doneData)}>klik</button>
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