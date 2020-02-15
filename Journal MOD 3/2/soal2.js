
function konfirmasi(){
	var txt;
	if (confirm('Tekan OK jika kamu adalah mahasiswa Telkom ?')) {
		var nama = prompt("isi nama");
			if (nama == null || nama == "") {
   				txt = "User cancelled the prompt.";
  			} else {
				var nim = prompt("isi nim")
    			txt = "Selamat Datang " + nama +","+ nim;
  			}
	} else{
		txt = ('Silahkan angkat kaki dari LAB ini Gan.!');
	}
	document.getElementById('demo').innerHTML = txt;
}