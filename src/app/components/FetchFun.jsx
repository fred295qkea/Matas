



 export default async function MainFetch(){
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
       console.log(data);
       
      
      
       

    return(
        <>
        {data.map((product)=>(
            <>
            <p>{product.id}</p>
            <p>{product.navn}</p>
            </>
            
        ))}
        </>
        
    )
}


