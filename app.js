function showMenu () {

  requestAnimationFrame(()=>{
    document.querySelector(".hidden-sidemenu").style.top = document.body.scrollTop;
  });
  document.querySelector(".hidden-sidemenu").classList.add("show-sidemenu");
  
  window.addEventListener('scroll', noScroll);
}
function hideMenu () {
  document.querySelector(".hidden-sidemenu").classList.remove("show-sidemenu");
  window.removeEventListener('scroll', noScroll);
}


function noScroll() {
  window.scrollTo(0, 0);
}

function monthly(){
  const span = document.createElement("span");
  span.innerHTML = "/month";
  document.querySelector("#mon").classList.add("slide-select");
  document.querySelector(".get-awesome-slider div").classList.remove("annualy");
  document.getElementById("ann").classList.remove("slide-select");
  document.getElementById("monthly").innerHTML = "$" + "99";
  document.getElementById("monthly").appendChild(span);
}

function annualy(){
  const span = document.createElement("span");
  span.innerHTML = "/month";
  document.querySelector("#mon").classList.remove("slide-select");
  document.querySelector(".get-awesome-slider div").classList.add("annualy");
  document.getElementById("ann").classList.add("slide-select");
  document.getElementById("monthly").innerHTML = "$" + (99*12);
  document.getElementById("monthly").appendChild(span);
}

function expand(node){
  const text = node.parentElement.parentElement.querySelector("p");
  if(text.classList.contains("hidden-text")){
    text.classList.remove("hidden-text");
  }else{
    text.classList.add("hidden-text");
  }
}

