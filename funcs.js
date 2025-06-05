function generatePassword(){
  const length = parseInt(document.getElementById("length").value);
  const includeUppercase=document.getElementById("uppercase").checked;
  const includeLowercase=document.getElementById("lowercase").checked;
  const includeNumbers=document.getElementById("numbers").checked;
  const includeSymbols=document.getElementById("symbols").checked;
  const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower="abcdefghijklmnopqrstuvwxyz";
  const numbers="0123456789";
  const symbols="!@#$%^&*()_+=-{}[]|:;<>,.?/";
  let allChars="";
  if(includeUppercase)allChars+=upper;
  if(includeLowercase)allChars+=lower;
  if(includeNumbers)allChars+=numbers;
  if(includeSymbols)allChars+=symbols;
  if(allChars.length===0){
    alert("Please select at least one character type!");
    return;
  }
  let password="";
  for(let i=0;i<length;i++){
    const randIndex=Math.floor(Math.random()*allChars.length);
    password+=allChars[randIndex];
  }
  document.getElementById("result").value=password;
}