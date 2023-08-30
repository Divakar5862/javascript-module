var firstname,lastname,age,previous school name,10th mark,12th mark,course details,gender;
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
  if(age==""){
  alert("please enter your age");
  age.focus();
  }
  if(previous school name==""){
    alert("please enter your previous school name");
    previous school name.focus();
    
  }
  if(10th mark==""){
    alert("please enter your 10th mark");
    1oth mark.focus();
    
    
  }
    if(12th mark==""){
    alert("please enter your 12th mark ");
    12th mark.focus();
    }
    if(course details==""){
    alert("please enter your course details");
    course detailsfocus();
    }
  
  if(gender==""){
    alert("please enter your gender");
    gender.focus();
    
    
  }
  console.log(firstname,lastname,age,previous school name,10th mark,12th mark,course details,gender);
  
}
function readForm(){
  firstname=document.getElementById("fname").value;
  lastname=document.getElementById("lname").value;
  age=document.getElementById("age").value;
  pervious school name=document.getElementById("sname").value;
  10th mark=document.getElementById("10mark").value;
  12th mark=document.getElementById("12mark").value;
  course details=document.getElementById("course").value;
  gender=document.getElementById("gen").value
}
document.getElementById("submit").onclick=function(){
  readForm();
  validation();
  alert("datasubmit");
  firstname=document.getElementById("fname").value="";
  lastname=document.getElementById("lname").value="";
  age=document.getElementById("age").value="";
  previous school name=document.getElementById("sname").value="";
  10th mark=document.getElementById("10mark").value="";
  12th mark=document.getElementById("12mark").value=""
  gender=document.getElementById("gen").value="";
  
}