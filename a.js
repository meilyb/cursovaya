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