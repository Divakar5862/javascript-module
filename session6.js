var firstname,lastname,age,previousschoolname,10thmark,12thmark,coursedetails,gender;
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
    previousschoolname.focus();
    
  }
  if(10th mark==""){
    alert("please enter your 10th mark");
    1othmark.focus();
    
    
  }
    if(12th mark==""){
    alert("please enter your 12th mark ");
    12thmark.focus();
    }
    if(course details==""){
    alert("please enter your course details");
    coursedetailsfocus();
    }
  
  if(gender==""){
    alert("please enter your gender");
    gender.focus();
    
    
  }
  console.log(firstname,lastname,age,previousschoolname,10thmark,12thmark,coursedetails,gender);
  
}
function readForm(){
  firstname=document.getElementById("fname").value;
  lastname=document.getElementById("lname").value;
  age=document.getElementById("age").value;
  perviousschoolname=document.getElementById("sname").value;
  10thmark=document.getElementById("10mark").value;
  12thmark=document.getElementById("12mark").value;
  coursedetails=document.getElementById("course").value;
  gender=document.getElementById("gen").value
}
document.getElementById("submit").onclick=function(){
  readForm();
  validation();
  alert("datasubmit");
  firstname=document.getElementById("fname").value="";
  lastname=document.getElementById("lname").value="";
  age=document.getElementById("age").value="";
  previousschoolname=document.getElementById("sname").value="";
  10thmark=document.getElementById("10mark").value="";
  12thmark=document.getElementById("12mark").value="";
  course details=document.getElementById("course").value="";
  gender=document.getElementById("gen").value="";
  
}