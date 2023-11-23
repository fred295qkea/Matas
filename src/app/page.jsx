import FormSteps from "./components/FormSteps";

export const dynamic = "force-dynamic"
import Step1 from "./components/Step-1";
import Step2 from "./components/Step-2";



export default async function Home() {
  let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoaXhzeXp4YnB6Z3B4cHpudHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE4NDksImV4cCI6MjAxMjQyNzg0OX0.IvgRa_9DEACdC_JrbcaISdRXZWVheM1r43xIkuDmcag";
    let url = "https://fhixsyzxbpzgpxpzntzm.supabase.co/rest/v1/matasduft";
    

    let headersList = {
        "apikey": apikey
       }
       
       let response = await fetch(url, { 
         method: "GET",
         headers: headersList
       });
       
        let data = await response.json();
       //console.log(data);
       
      
      
      
      //let genders = [...new Set(data.map(item => item.gender))];

      return(
        <main className="h-full w-full flex justify-center items-center">
        
        <FormSteps data={data} className=""/>

    </main>
)}
