window.addEventListener('DOMContentLoaded',()=>{
    fetchData();
})

async function fetchData(){

await axios.get('http://localhost:4000/items')
.then((responses)=>{
    console.log(responses);
})
.catch(err=>console.log(err))



}