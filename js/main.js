const elUser = document.querySelector(".header__user-btn");
const elModall = document.querySelector(".modall");
const elModallClose = document.querySelector('.modall-close');
const elMenyuBtn = document.querySelector('.header__menu-btn');
const elmenyu = document.querySelector('.menyu');
const elSmMenyu = document.querySelector('.sm-menyu');
const elCamBtn = document.querySelector('.header__cam-btn');
const elCamModal = document.querySelector('.cam-modal');
const elCubBtn = document.querySelector('.header__cub-btn');
const elService = document.querySelector('.service');
const elVoiceSearchBtn = document.querySelector('.header__microphone');
const elVoiceSearch = document.querySelector('.search-modal');
const elModalBg = document.querySelector('.search-modal__bg');
const elModalClose = document.querySelector('.search-modal__btn');

elUser.addEventListener('click', ()=>{
  elModall.classList.toggle('modal-block');
  elModallClose.classList.toggle('modall-block');
})
elModallClose.addEventListener('click', ()=> {
  elModall.classList.toggle('modal-block');
  elModallClose.classList.toggle('modall-block');
})
elMenyuBtn.addEventListener('click', ()=> {
  elmenyu.classList.toggle('sm-menyu');
})
elCamBtn.addEventListener('click', ()=> {
  elCamModal.classList.toggle('cam-modal-block');
})
elCubBtn.addEventListener('click', ()=> {
  elService.classList.toggle('service-block');
})
elVoiceSearchBtn.addEventListener('click', ()=> {
  elVoiceSearch.classList.toggle('search-modal__block');
  elModalBg.classList.toggle('search__bg--block');
})
elModalBg.addEventListener('click', ()=> {
  elVoiceSearch.classList.toggle('search-modal__block');
  elModalBg.classList.toggle('search__bg--block');
})
elModalClose.addEventListener('click', ()=> {
  elVoiceSearch.classList.toggle('search-modal__block');
  elModalBg.classList.toggle('search__bg--block');
})

