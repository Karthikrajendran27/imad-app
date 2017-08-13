console.log('Loaded!');


//Change the text of the maintext div
var element = document.getElementById('maintext');

element.innerHTML = 'New Value';

//Move the Image
var img = document.getElementById('madi');
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};