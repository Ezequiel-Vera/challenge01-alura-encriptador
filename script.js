const inputText=document.querySelector(".inputText");
const message=document.querySelector(".message");
function btnEncrypt(){
    const textEncrypt=encrypt(inputText.value);
    message.value=textEncrypt;
    message.style.backgroundImage="none";
    inputText.value="";
}
function btnDecrypt(){
    const textDecrypt=decrypt(inputText.value);
    message.value=textDecrypt;
    inputText.value="";
}
function btnCopy(){
    message.select();
    navigator.clipboard.writeText(message.value);
    message.value="";
    alert("Texto copiado exitosamente!!!");
}
function encrypt(dataE){
    let arrayCode=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    dataE=dataE.toLowerCase();
    for(let i=0;i<arrayCode.length;i++){
        if(dataE.includes(arrayCode[i][0])){
            dataE=dataE.replaceAll(arrayCode[i][0],arrayCode[i][1]);
        }
    }
    return dataE;
}
function decrypt(dataD){
    let arrayCode=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    dataD=dataD.toLowerCase();
    for(let i=0;i<arrayCode.length;i++){
        if(dataD.includes(arrayCode[i][1])){
            dataD=dataD.replaceAll(arrayCode[i][1],arrayCode[i][0]);
        }
    }
    return dataD;
}