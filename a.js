$("[data-modal]").click(function(){
let modalID=$(this).data("modal");
$(`#${modalID}`).addClass("active");
});
function check(){
  
    if(document.forms.login.elements.Login.value==""){
        alert('заполните логин');
    }
    if(document.forms.login.elements.emaill.value==""){
            alert('заполните почту')
    }
        if(document.forms.login.elements.pass.value==""){
            alert('заполните пароль')
    }
       if(document.forms.login.elements.pass.value<7){
            alert('пароль должен содержать не менее 7 символов')
    }
    if(document.forms.login.elements.Login.value!=""&&document.forms.login.elements.pass.value!=""&&document.forms.login.elements.emaill.value!=""){
    alert(`на почту ${email} отправлено письмо с подтверждением`)
    }
}
$("[data-close]").click(function(){
let modalID=$(this).data("close");
$(`#${modalID}`).removeClass("active");
});
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideItems.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
  updateCarousel();
});

/*----------------------------------------------------------------------------------------*/

const slides1 = document.querySelector('.slides1');
const slideItems1 = document.querySelectorAll('.slide1');
const nextBtn1 = document.querySelector('.next1');
const prevBtn1 = document.querySelector('.prev1');



function updateCarousel2() {
  slides1.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn1.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideItems1.length;
  updateCarousel2();
});

prevBtn1.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideItems1.length) % slideItems1.length;
  updateCarousel2();
});
/*----------------------------------------------------------------------------------------*/

const slides2 = document.querySelector('.slides2');
const slideItems2 = document.querySelectorAll('.slide2');
const nextBtn2 = document.querySelector('.next2');
const prevBtn2 = document.querySelector('.prev2');



function updateCarousel3() {
  slides2.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn2.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideItems2.length;
  updateCarousel3();
});

prevBtn2.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideItems2.length) % slideItems2.length;
  updateCarousel3();
});