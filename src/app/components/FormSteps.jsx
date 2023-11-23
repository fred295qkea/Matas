"use client"

import Button from "./Button"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import Step1 from "./Step-1";
import Step2 from "./Step-2";
import Step3 from "./Step-3";
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
        {/*<button onClick={()=>setAarstid("summer")}>Sommer</button>
        <button onClick={()=>setAarstid("spring")}>Forår</button> 
        <button onClick={()=>setAarstid("winter")}>Vinter</button>
    <button onClick={()=>setAarstid("fall")}>Efterår</button> */}
        <h1>{aarstid}</h1>
        <Step2 data={props.data} setAarstid={setAarstid}/>
        </div>
    },
    {
        id: "step 3",
        name: "Smell",
        content:  <>
        <h1>{finalId}</h1>
        
        <Step3 setFinalId={setFinalId} doneData={doneData}/>
        </> 
    },
    {
        id: "step 4",
        name: "tease",
        content:
        <>
        <img src={finalProduct?"/matas-scent/"+finalProduct[0].billede:""} alt="" />
        <p>{ finalProduct? finalProduct[0].id: ""}</p>
        {<p>{console.log(finalProduct)}</p>}
        </> 
    },
    {
        id:"step 5",
        name: "result",
        content: <p>hejsa</p>
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