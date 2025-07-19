 let inputValues=document.querySelector('#input')
 
 
 const allClear=()=>{
     inputValues.value ='';
 }
 const display=(input)=>{
     inputValues.value+=input;
 }
 const calculate=()=>{
    try{
        inputValues.value=eval(inputValues.value);
    }
    catch(error)
    {
        alert("Invalid Inputs")
    }
 }




 const deleteDigits=()=>{
   inputValues.value = inputValues.value.slice(0,-1)
 }