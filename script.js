const themeToggle =
document.getElementById("themeToggle");

themeToggle.onclick = ()=>{

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    themeToggle.innerHTML = "☀️";

  }else{

    themeToggle.innerHTML = "🌙";

  }

};

const text =
"AI & Web Developer";

let index = 0;

function typingEffect(){

  if(index < text.length){

    document.querySelector(".typing")
    .innerHTML += text.charAt(index);

    index++;

    setTimeout(typingEffect,100);

  }

}

typingEffect();