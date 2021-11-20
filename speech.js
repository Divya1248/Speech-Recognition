window.SpeechRecognition=window.webkitSpeechRecognition;
let recognition=new SpeechRecognition();
//console.log(recognition);
let p= document.createElement("p");
let template= document.getElementById("template");
template.appendChild(p);
var value=1;

recognition.addEventListener("result", e=>{
    console.log(e.results[0][0].transcript);
    let text= e.results[0][0].transcript;
    p.innerHTML=text;
    if(e.results[0].isFinal===true){
        p=document.createElement("p");
        template.appendChild(p);
       
    
     }
       window.localStorage.setItem(`ket:${value}`,text)
            value++;
    
      
});
recognition.addEventListener("end", recognition.start);

recognition.start();



