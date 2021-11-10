function myFunc_fname(){
    let first_name = document.getElementById("first_name").value;
    let mandatory = document.getElementById("fname_mand"); 
    if(first_name.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_lname(){
    let last_name = document.getElementById("last_name").value;
    let mandatory = document.getElementById("lname_mand"); 
    if(last_name.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_mail(){
    let mail = document.getElementById("email").value;
    let mandatory = document.getElementById("mail_mand"); 
    if(mail.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_cmail(){
    let c_mail = document.getElementById("c_email").value;
    let mandatory = document.getElementById("cmail_mand"); 
    if(c_mail.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_country() {
    let country = document.getElementById("country").value;
    let mandatory = document.getElementById("contry_mand"); 
    if(country == "empty"){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }  
}
function myFunc_pass() {
    let pass = document.getElementById("pass").value;
    let mandatory = document.getElementById("pass_mand"); 
    if(pass.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }  
}
function myFunc_cpass() {
    let cpass = document.getElementById("c_pass").value;
    let mandatory = document.getElementById("cpass_mand"); 
    if(cpass.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }  
}

function signup(){
 
    // *************validation********* //
  
     let f_name = document.getElementById("first_name").value;
     let f_name_mand= document.getElementById("fname_mand"); 
     if(f_name.length == 0){
        f_name_mand.innerText="First name required";
        f_name_mand.setAttribute("style", "display:block");
     }else {
        f_name_mand.innerText="Required";
        f_name_mand.setAttribute("style", "display:none");
     }

     let l_name = document.getElementById("last_name").value;
     let l_name_mand = document.getElementById("lname_mand"); 
     if(l_name.length == 0){
      l_name_mand.innerText="Last name required";
      l_name_mand.setAttribute("style", "display:block");
     }else {
      l_name_mand.innerText="Required";
      l_name_mand.setAttribute("style", "display:none");
     }

     let mail = document.getElementById("email").value;
     let mail_mand = document.getElementById("mail_mand"); 
     if(mail.length == 0){
      mail_mand.innerText="Mail required"
      mail_mand.setAttribute("style", "display:block");
     }else {
      mail_mand.innerText="Required"
      mail_mand.setAttribute("style", "display:none");
     }

     let c_mail = document.getElementById("c_email").value;
     let c_mail_mand = document.getElementById("cmail_mand"); 
     if(c_mail.length == 0){
      c_mail_mand.innerText="Mail required"
      c_mail_mand.setAttribute("style", "display:block");
     }else if(c_mail !== mail) {
        c_mail_mand.innerText="Mail Mismatch";
        c_mail_mand.setAttribute("style", "display:block");
     }else {
        c_mail_mand.innerText="Required";
        c_mail_mand.setAttribute("style", "display:none");
     }

     let signup_pass = document.getElementById("pass").value;
     let pass_mand = document.getElementById("pass_mand"); 
     if(signup_pass.length == 0){
     pass_mand.innerText="Password required"
     pass_mand.setAttribute("style", "display:block");
     }else if(signup_pass.length < 8){
        pass_mand.innerText="Minimum password length 8";
        pass_mand.setAttribute("style", "display:block");
     }else {
        pass_mand.setAttribute("style", "display:none");
     }  
     
  
     let signup_Cpass = document.getElementById("c_pass").value;
     let cpass_mand = document.getElementById("cpass_mand"); 
     if(signup_Cpass.length == 0){
      cpass_mand.innerText="Password required"
      cpass_mand.setAttribute("style", "display:block");
     }else if(signup_Cpass !==  signup_pass){
        cpass_mand.innerText="Password Mismatch"
        cpass_mand.setAttribute("style", "display:block");
       }
     else {
        cpass_mand.innerText="Required"
      cpass_mand.setAttribute("style", "display:none");
     }  

    
      // *************validation********* //
  
      if(localStorage.getItem("plural_Signup") === null){
        localStorage.setItem(("plural_Signup"), JSON.stringify([]));
        }
     if((f_name.length != 0) && (l_name.length != 0) && (mail.length != 0) && (c_mail == mail) && (signup_pass == signup_Cpass)){
      let user ={
        f_name,
        l_name,
        mail,
        signup_pass,
    };
    
     // get array from localstorage
     let array=JSON.parse(localStorage.getItem("plural_Signup"));
     //push new user to array
     array.push(user); // adding new user
     console.log('array:', array);
     localStorage.setItem(("plural_Signup"), JSON.stringify(array));  
     }
  
  }

