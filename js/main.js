const elUser = document.querySelector(".header__user-btn");
const elModall = document.querySelector(".modall");
const elMenyuBtn = document.querySelector('.header__menu-btn');
const elmenyu = document.querySelector('.menyu');
const elSmMenyu = document.querySelector('.sm-menyu');

elUser.addEventListener('click', ()=>{
  elModall.classList.toggle('modal-block')
}) 
elMenyuBtn.addEventListener('click', ()=> {
  elmenyu.classList.toggle('sm-menyu');
})
elSmMenyu.onclick = (index)=>{
  index.target.style.z-index == '1';
}