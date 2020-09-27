const slide = document.querySelector(".switch-btn");

const video = document.querySelector(".video-container");

// slide.addEventListener("click", function(){

//     // if(!slide.classList.contains("slide")){
//     //     slide.classList.add("slide");
//     //     video.pause();
//     // }else{
//     //     slide.classList.remove("slide");
//     //     video.play();
//     // }
// });



// using checkbox method


const chk = document.querySelector(".chk");

chk.addEventListener("click", function(){

if(chk.checked === true){
    video.pause();
}else{
    video.play();
}
});