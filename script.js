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
}
// const navig=document.getElementById('nav');
// if(!navig.classList.contains("active")){
// window.addEventListener("wheel", function(){
    //     nav();
    // });
    // }
// window.addEventListener("wheel", check());
// const first=document.querySelector("#menu");
// first.addEventListener("scroll",()=>{
//     console.log("scroll");
// });

function check(){
    if(document.getElementById("nav").classList.contains("active")){
        console.log("yes");
        nav();
    }
    else{
        console.log("no");
    }
}