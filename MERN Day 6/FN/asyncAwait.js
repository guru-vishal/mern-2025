async function asAw(){
    setTimeout(()=>{
       console.log("Inside timeout");    
    },5000)
    return await("This is Example of As/Aw"); 
}

asAw().then(function(output){
    console.log(output);
})
// Instagram Example
commentcode = async()=>{
};