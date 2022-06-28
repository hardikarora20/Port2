var index=1;
function sendMail(){
    var name=document.getElementsByTagName("input")[0].value;
    var email=document.getElementsByTagName("input")[1].value;
    var message=document.getElementsByTagName("textarea")[0].value;
    console.log(name);
    console.log(email);
    console.log(message);
    window.location.href='mailto:hardik.20.a@gmail.com?subject=Enquiry: '+name+'('+email+')'+"&body="+message;
}
function nav(){
    // document.getElementById("nav").style.backgroundColor="pink";
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("nav").classList.toggle("nav-view");
    document.getElementById("section1").classList.toggle("active-sec");
    document.getElementById("section2").classList.toggle("active-sec");
    document.getElementById("section3").classList.toggle("active-sec");
    document.getElementById("section5").classList.toggle("active-sec");
    document.getElementById("menu").classList.toggle("invert");
    document.getElementById("particles-js").classList.toggle("shift");
    document.getElementsByTagName("body")[0].classList.toggle("body-bg");
    document.getElementsByTagName("main")[0].classList.toggle("disable-scroll");
    document.getElementsByTagName("svg")[0].classList.toggle("rotate-nav");
    document.getElementsByTagName("svg")[0].classList.toggle("menu");
    change();
} 
function check(){
    if(document.getElementById("nav").classList.contains("active")){
        console.log("yes");
        nav();
    }
    else{
        console.log("no");
    }
}
function change(){
    if(document.getElementsByTagName("svg")[0].classList.contains("menu")){
        document.getElementsByTagName("svg")[0].innerHTML='<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="67.9619" width="65" height="8" rx="4" transform="rotate(-45 22 67.9619)" fill="#ffffff"/><rect x="22" y="67.9619" width="65" height="8" rx="4" transform="rotate(-45 22 67.9619)" fill="#ffffff"/><rect x="67.9619" y="73.6188" width="65" height="8" rx="4" transform="rotate(-135 67.9619 73.6188)" fill="#ffffff"/></svg>';
    }
    else{
        document.getElementsByTagName("svg")[0].innerHTML='<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="26" width="65" height="8" rx="4" fill="#000000"/><rect x="16" y="44" width="65" height="8" rx="4" fill="#000000"/><rect x="16" y="62" width="65" height="8" rx="4" fill="#000000"/></svg>';
    }
}
function scrolldiv(id){
    nav();
    location.href = '#section'+id;
    index++;
}
function back(){
    history.go(-index);
}
