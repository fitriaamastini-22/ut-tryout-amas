let arr_num = [];
while(true){
	let num = prompt("Masukkan angka (Jika ingin berhenti, masukkan '='):");
	if(num === '='){
		break;
	}
	num = Number(num);
	if (typeof num === 'number'){
		arr_num.push(num);
	}
}

document.write(arr_num);
document.write("<br/>");
let total = arr_num.reduce((a,b) => a+b);
document.write(total);
