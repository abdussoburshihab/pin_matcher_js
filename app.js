function generatepin(){

   const pin=getpin()
   document.getElementById('display-pin').value =pin;
}

function getpin(){

    const pin=Math.round(Math.random()*10000)
    const pinstring = pin + ''
    if(pinstring.length==4){
        return pin
    }
    else{
        // console.log('got 3 digit',pin);
        return getpin()
    }
}




///////////////////////////////////////

document.getElementById('keypad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput= document.getElementById('typed-num');
    if(isNaN(number)){
        if(number== 'C'){
            calcInput.value='';
        }
    }
   else{
    
    const previousNumber= calcInput.value;
    const newNumber=previousNumber+number
    calcInput.value=newNumber;
   }
})


/////////////////////////////

function verifypin(){
    const pin = document.getElementById('display-pin').value;
    const typedNum= document.getElementById('typed-num').value;
    const PassMessage=document.getElementById('passed')
    const failError=document.getElementById('failed')

    if(pin == typedNum){
        PassMessage.style.display='block';
        failError.style.display='none'
    }
    else{
        failError.style.display='block'
        PassMessage.style.display='none'
    
    }
        
}




