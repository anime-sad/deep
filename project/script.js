function sendMail(){
  let parms ={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    subject:document.getElementById("subject").value,
  }

  emailjs.send("service_1167kdq,template_fbvr435,parms").then(alert("Email sent!!"))
}
