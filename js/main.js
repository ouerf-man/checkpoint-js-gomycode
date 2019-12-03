var text = document.getElementById("textArea");

function bold(){
    text.style.fontWeight = text.style.fontWeight=="bold"? "normal" : "bold";
}


function italic(){
    if(text.style.fontStyle=="italic"){
        text.style.fontStyle= "normal"
    }else{
        text.style.fontStyle="italic";
    }
}

function underline(){
    if(text.style.textDecoration=="underline"){
        text.style.textDecoration= "none"
    }else{
        text.style.textDecoration="underline";
    }
}


document.getElementById('selectSize').addEventListener("change",function(){
    text.style.fontSize= document.getElementById('selectSize').value;
})

document.getElementById('selectFamily').addEventListener("change",function(){
    text.style.fontFamily= this.value;
})