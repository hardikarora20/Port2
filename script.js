function sendMail(){
    var name=document.getElementsByTagName("input")[0].value;
    var email=document.getElementsByTagName("input")[1].value;
    var message=document.getElementsByTagName("textarea")[0].value;
    console.log(name);
    console.log(email);
    console.log(message);
    window.location.href='mailto:hardik.20.a@gmail.com?subject=Enquiry: '+name+'('+email+')'+"&body="+message;
}