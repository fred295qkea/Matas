"use client"

import Button from "./Button"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import Step1 from "./Step-1";
import Step2 from "./Step-2";
import Step3 from "./Step-3";
import Image from "next/image";
function FormSteps(props) {

    const [currentStep, setCurrentStep] = useState(0)
   
    // de useState vi bruger til at filtrere 
    const [aarstid, setAarstid] = useState("");
    const [type, setType] = useState("");
    const [finalId, setFinalId] = useState("");

    let doneData = props.data;
    let finalProduct;
    if (type) {
        doneData = props.data.filter((e)=>e.gender === type);
    }
    if(aarstid) {
        doneData = doneData.filter((e)=>e.aarstid.includes(aarstid));
       
    }
    if(finalId){
        finalProduct = doneData.filter((e)=>e.id === finalId);
        
    }
    const steps = [
    {
        id: "step 1",
        name: "Type",
        content:  <div>
        <h1>{type}</h1>
        <Step1 setFinalId={setFinalId} data={props.data} setType={setType}/>
        
        </div>
        
    },
    {
        id: "step 2",
        name: "Season",
        content:  <div>
        {/*<button onClick={()=>setAarstid("summer")}>Sommer</button>
        <button onClick={()=>setAarstid("spring")}>Forår</button> 
        <button onClick={()=>setAarstid("winter")}>Vinter</button>
    <button onClick={()=>setAarstid("fall")}>Efterår</button> */}
        <h1>{aarstid}</h1>
        <Step2 setFinalId={setFinalId} data={props.data} setAarstid={setAarstid}/>
        </div>
    },
    {
        id: "step 3",
        name: "Smell",
        content:  <>
        <h1>{finalId}</h1>
        
        <Step3 setFinalId={setFinalId} finalId={finalId} doneData={doneData}/>
        </> 
    },
    {
        id: "step 4",
        name: "tease",
        content:
        <>

        <Image
                className={`  rounded-xl  bg-matas-200 }`}
                src={finalProduct?"/matas-scent/"+finalProduct[0].billede:""}// Assuming next.svg is in the public directory
                width={200}
                height={200}
                alt="paco"
            />
        <p>{ finalProduct? finalProduct[0].id: ""}</p>
        {<p>{console.log(finalProduct)}</p>}
        </> 
    }
    ]



  return (
    <div className="w-4/5 min-h-[80%] bg-mantas-100 rounded-2xl shadow-lg p-10 m-5 grid gap-10 ">

                {steps[currentStep].content}

        
                <div className="flex items-center">
    {steps.map((step, index) => (
        <>
            <motion.li 
                key={step.id} 
                className={`list-none p-4 rounded-full`}
                animate={{ backgroundColor: currentStep >= index ? '#44BDEE' : '#8893A8' }}
            >   
            </motion.li>
            {index < steps.length - 1 && 
                <motion.div 
                    className={`h-1 flex-grow `}
                    animate={{ backgroundColor: currentStep > index ? '#44BDEE' : '#8893A8' }}
                ></motion.div>
            }
        </>
    ))}
</div>
        <div>
        {currentStep === 0 ? <Button desc="left"/>:  <Button desc="left" setCurrentStep={setCurrentStep} currentStep={currentStep}/>}

        {currentStep === 4 ? <Button desc="right" /> : <Button desc="right" setCurrentStep={setCurrentStep} currentStep={currentStep}/>
}
        </div>

    </div>
  )
}

export default FormSteps