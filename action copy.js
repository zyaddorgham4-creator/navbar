const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navButtons = document.getElementById("nav-buttons");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navButtons.classList.toggle("show");
});

let home = document.getElementById('home');

home.addEventListener('click',function(){
  scroll({
    top :0,
    behavior : "smooth"
  })
})


let about = document.getElementById('about');

about.addEventListener('click',function(){
  scroll({
    top :800,
    behavior : "smooth"
  })
})


let menu = document.getElementById('menu');

menu.addEventListener('click',function(){
  scroll({
    top :1300,
    behavior : "smooth"
  })
})

let testamonials = document.getElementById('testamonials');

testamonials.addEventListener('click',function(){
  scroll({
    top :2450,
    behavior : "smooth"
  })
})

let gallery = document.getElementById('gallery');

gallery.addEventListener('click',function(){
  scroll({
    top :3200,
    behavior : "smooth"
  })
})



let facebook  =document.getElementById('facebook');

let instagram  =document.getElementById('instagram');

facebook.onclick  =function()
{
  window.open('https://www.facebook.com/share/1A7T8k7uxR/');
}

instagram.onclick  =function()
{
  window.open('https://www.instagram.com/zyddrgm65?igsh=MXdlcndvbnBlcTZ1OA==');
}