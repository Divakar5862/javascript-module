let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});
document.getElementById("").onclick=function(){
  readForm();
  validation();
  alert("datasubmit");
  username=document.getElementById("form-group").value="";
  Email=document.getElementById("form-group").value="";
  password=document.getElementById("form-group").value="";
  con=document.getElementById("form-group").value="";
  address=document.getElementById("form-group").value="";
  gender=document.getElementById("form-group").value="";
  