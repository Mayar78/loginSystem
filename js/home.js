var messesgeW =document.getElementById("messesgeW");
var logOutBtn = document.getElementById("logOutBtn");
var sure = document.getElementById('sure');
var Cancel = document.getElementById('Cancel');
var btnclose = document.getElementById('btnclose');

var item = Array.from(document.querySelectorAll('.item img'));
var lightBox = document.querySelector('.light-box');
var lightBoxitem = document.querySelector('.light-box-item');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var close = document.querySelector('.close');

var currentIndex;
next.addEventListener('click', nextSL)
prev.addEventListener('click', prevSL)
close.addEventListener('click', closeLayer)



document.getElementById('welcomeMassage').innerHTML= localStorage.getItem("nameForWelcome");

setTimeout(dissapperwelcome,2000);

function dissapperwelcome(){
    messesgeW.classList.add("d-none");
}

Cancel.addEventListener('click',function(){
    disapperModal()})

btnclose.addEventListener('click',function(){
    disapperModal()
})
document.addEventListener("keydown",function(e){
    if(e.key == "Escape"){
    disapperModal()

    }
})
logOutBtn.addEventListener('click',function(){
    document.getElementById('modalLog').classList.add("d-block");
document.getElementById('userModal').innerHTML= localStorage.getItem("nameForWelcome") + ',';

})

function disapperModal(){
    document.getElementById('modalLog').classList.remove("d-block");
}
sure.addEventListener("click",function(){
    // localStorage.removeItem("user");
    location.href='../index.html';
})




for (var i = 0; i < item.length; i++) {

    item[i].addEventListener('click', function (e) {
        var imgSrc = e.target.getAttribute('src');
        currentIndex = item.indexOf(e.target);
        lightBoxitem.style.backgroundImage = `url(${imgSrc})`;
        lightBox.classList.replace("d-none", "d-block");

    })
}

function nextSL() {
    currentIndex++;

    if (currentIndex == item.length) {
        currentIndex = 0;
    }
    var imgSrc = item[currentIndex].getAttribute('src');
    lightBoxitem.style.backgroundImage = `url(${imgSrc})`

}
function prevSL() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = item.length - 1;
    }
    var imgSrc = item[currentIndex].getAttribute('src');
    lightBoxitem.style.backgroundImage = `url(${imgSrc})`
}

function closeLayer(){
    lightBox.classList.replace("d-block", "d-none");

}
document.addEventListener('keydown',function(e){
    if(e.key == 'ArrowLeft'){
        prevSL();
    }
    if(e.key == 'ArrowRight'){
        nextSL();
    }
    if(e.key == 'Escape'){
        closeLayer();
    }
})
lightBox.addEventListener('click',function(e){
    closeLayer();
})
lightBoxitem.addEventListener('click',function(e){
    e.stopPropagation();
}
)