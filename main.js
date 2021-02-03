function time(){
    var date= new Date();
    var month = date.getMonth();
    var day =  date.getDate();
    var year = date.getFullYear();
    var hr = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ampm = hr >= 12 ? 'pm' : 'am';
     if(m < 10){
         m = "0" + m
    }
    if(s < 10)
    {
        s = "0" + s
    }

    document.getElementById("time").innerHTML = hr + ":" + m + ampm+"</br>"+month+"/"+day+"/"+year;
    setTimeout("time()",100)
}

function funce() {
    var e = document.querySelector(".tasks");
if(e.style.display == 'none')
       e.style.display = 'block';
    else
       e.style.display = 'none';
 }
 function vol() {
    var d = document.querySelector(".range-slider");
if(d.style.display == 'none')
       d.style.display = 'block';
    else
       d.style.display = 'none';
 }





var range = $('.input-range'),
value = $('.range-value');
value.html(range.attr('value'));
range.on('input', function(){
    value.html(this.value);
}); 