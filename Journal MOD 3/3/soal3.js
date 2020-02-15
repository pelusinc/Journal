function hitung(){
var x=eval(document.form1.x.value);
var y=eval(document.form1.y.value);
var pil= document.form1.opt.value;

// LENGKAPI KODINGAN DISINI UNTUK TIAP OPERASI

// TAMBAH
var z;
if(pil == 'tambah'){
	z = x + y;
}else if(pil == 'kurang'){
	z = x - y;
}else if(pil == 'kali'){
	z = x * y;
}else if(pil == 'bagi'){
	z = x / y;
}

// KURANG

// KALI

// BAGI

document.form1.hasil.value = z;
}
function resetForm(){
document.form1.reset();
}