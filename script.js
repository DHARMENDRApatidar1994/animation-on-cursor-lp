var cursor = document.querySelector(".cursor");
var main = document.querySelector(".page1");

main.addEventListener("mousemove", function (dets){
    // console.log(dets.x,dets.y)
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})
document.querySelector("#overlay1").addEventListener("mousemove",function(dets){
    document.querySelector("#img1 img").style.scale = 1
    document.querySelector("#img1 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#img1 img").style.left = (dets.x-350) +"px"
    document.querySelector("#img1 img").style.top = (dets.y-300)+"px"
})
document.querySelector("#overlay1").addEventListener("mouseleave",function(dets){
    document.querySelector("#img1 img").style.scale = 0
    document.querySelector("#img1 img").style.opacity = 0
    cursor.style.opacity = 1
});
document.querySelector("#overlay2").addEventListener("mousemove",function(dets){
    document.querySelector("#img2 img").style.scale = 1
    document.querySelector("#img2 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#img2 img").style.left = (dets.x-600) +"px"
    document.querySelector("#img2 img").style.top = (dets.y-300)+"px"
})
document.querySelector("#overlay2").addEventListener("mouseleave",function(dets){
    document.querySelector("#img2 img").style.scale = 0
    document.querySelector("#img2 img").style.opacity = 0
    cursor.style.opacity = 1
});
document.querySelector("#overlay3").addEventListener("mousemove",function(dets){
    document.querySelector("#img3 img").style.scale = 1
    document.querySelector("#img3 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#img3 img").style.left = (dets.x-850) +"px"
    document.querySelector("#img3 img").style.top = (dets.y-300)+"px"
})
document.querySelector("#overlay3").addEventListener("mouseleave",function(dets){
    document.querySelector("#img3 img").style.scale = 0
    document.querySelector("#img3 img").style.opacity = 0
    cursor.style.opacity = 1
});