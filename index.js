let barIcon = document.querySelector('#bars');
let closeIcon = document.querySelector('#close');
let navBar = document.querySelector('.nav-bar');
let navLinks = document.querySelectorAll('.nav-link')

barIcon.addEventListener('click',()=>{
  navBar.style.left ="0px"
  closeIcon.style.display = "block";
  barIcon.style.display = "none";
})

closeIcon.addEventListener('click',()=>{
  navBar.style.left ="-100%"
  closeIcon.style.display = "none";
  barIcon.style.display = "block";
})

navLinks.forEach((link)=>{
  link.addEventListener('click',()=>{
    navBar.style.left ="-100%"
  closeIcon.style.display = "none";
  barIcon.style.display = "block";
  })
})