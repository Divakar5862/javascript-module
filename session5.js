var firstname,lastname,emailid,number,gender,address;
function validation(){
  readForm();
  if(firstname==""){
    alert("please enter your first name");
    firstname.focus();
  }
  if(lastname==""){
    alert("please enter your last name");
    lastname.focus();
    
  }
  if(emailid==""){
  alert("please enter your email id");
  emailid.focus();
  }
  if(number==""){
    alert("please enter your moblie number");
    number.focus();
    
  }
  if(address==""){
    alert("please enter your address");
    address.focus();
    
    
  }
  if(gender==""){
    alert("please enter your gender");
    gender.focus();
    
    
  }
  console.log(firstname,lastname,emailid,number,address,gender);
  
}
function readForm(){
  firstname=document.getElementById("faname").value;
  lastname=document.getElementById("lname").value
  emailid=document.getElementById("mail").value
  number=document.getElementById("num").value
  address=document.getElementById("add").value
  gender=document.getElementById("gen").value
}