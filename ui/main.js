console.log('Loaded!');


//Change the text of the maintext div
var element = document.getElementById('maintext');

element.innerHTML = 'New Value';

//Move the Image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function () {
    var interval = setInterval(moveRight, 10);
};