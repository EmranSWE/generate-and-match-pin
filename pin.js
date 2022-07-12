function getPin() {
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }
    else{
        return getPin();
    }
   
}

//Generating Pin code
function generatePin() {
   const pin= getPin()
   document.getElementById('pin-value').value=pin;
}


//Keypad

document.getElementById('key-pad').addEventListener('click',function (event) {
    
    const numbers=event.target.innerText;
    const typeNumbers=document.getElementById('typed-numbers');
   if(isNaN(numbers)){
    //   
    if(numbers=='C'){
    typeNumbers.value='';
    }
        
   }
   else{
   
    const previousNumber=typeNumbers.value;
    const newNumber=previousNumber+numbers;
    typeNumbers.value=newNumber;
   }
});

//Verify Pin

function verifyPin(params) {
    // console.log('Verify')
    const pinValue=document.getElementById('pin-value').value;
    const typedValue=document.getElementById('typed-numbers').value;
    const verifyFail=document.getElementById('verify-fail');
    const verifyPass=document.getElementById('verify-pass');
    console.log(typedValue)
    if(pinValue==typedValue){
        
        verifyPass.style.display='block';
        verifyFail.style.display='none';
    }
    else{
       
        verifyFail.style.display='block';
        verifyPass.style.display='none';
    }
}