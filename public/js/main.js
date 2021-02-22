
const submitbtn=document.getElementById('submit')
const citynam=document.getElementById('citynam')
const tam=document.getElementById('tam')
const alaka=document.getElementById('alaka')
const country=document.getElementById('country')
const min=document.getElementById('min')
const max=document.getElementById('max')
const getinfo=async()=>{
    event.preventDefault();
    const cityval=citynam.value;
    if(cityval==='')
    {
          tam.innerText='plz enter city name bf src'
          console.log('nop')
    }
    else{
        try{
          let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=1476d95fc6140206ee7ea15d67694b30`;
          const respons=await fetch(url);
          const data=await respons.json();
           console.log(data)
        const arr=[data];
         alaka.innerText=data.name;
        tam.innerText= data.main.temp;
        min.innerText=data.main.temp_min;
         max.innerText=data.main.temp_max;
        //min.innerText=data.main.temp_min;
        // alaka.innerText=cityval
        }catch{
            tam.innerText='plz enter valid'
            
        }

        
    }
  
}
submitbtn.addEventListener('click',getinfo)