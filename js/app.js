const gallery=["./asserts/pic-1.jpg","./asserts/pic-2.jpg","./asserts/pic-3.jpg","./asserts/pic-4.jpg","./asserts/pic-5.jpg","./asserts/pic-6.jpg","./asserts/pic-7.jpg","./asserts/pic-8.jpg","./asserts/pic-9.jpg","./asserts/pic-10.jpg"];
const imgcomponent=document.getElementById("gallery-book");
const backward=document.getElementById("back");
const forward=document.getElementById("move");
let i=0;
forward.addEventListener("click",function(){
    while(i<gallery.length){
        imgcomponent.src=gallery[i]
        imgcomponent.alt=`pic${i}`
        i++
        break;
    }

})
backward.addEventListener("click",function(){
    if(i>0){
        i=i-1
        imgcomponent.src=gallery[i-1]
        imgcomponent.alt=`pic${i-1}`
    }
    while(i<=0  || i==-1){
        imgcomponent.src="./asserts/footer-image.jpg"
        imgcomponent.alt="footer-image"
        break;
    }
})

