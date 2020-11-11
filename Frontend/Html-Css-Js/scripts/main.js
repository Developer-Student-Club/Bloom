document.getElementById('click').onclick = function(){myFunction()};
function myFunction(){
    document.getElementById('side').classList.toggle("show");
    document.getElementById('click').classList.toggle("change");
}