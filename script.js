const display=document.getElementById("display");

function btnClick(input){
    display.value+=input;
}

function Clear(input){
    display.value="";
}


function Sum(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
    
}