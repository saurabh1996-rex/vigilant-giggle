const website = ()=>{
const menuIcon = document.querySelector(".menu")
const navBar = document.querySelector("nav")
menuIcon.addEventListener("click",()=>{
  if(navBar.style.display=="block"){
    navBar.style.display="none";
  }else{
    navBar.style.display="block"
  }
})
}
website()