
var mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];		//Task_#_1

function ok(){								//Task_#_2

	var p = document.getElementById('new1');
	var new2 = '';
	for (var i = 0; i < mas.length; i++) {
		new2 += i + ')' + ' -- ' + mas[i] + '<br>';
		
	} 
	console.log(mas);
	p.innerHTML = new2 + '<hr>';
	
}
//ok();



function po(){				//Task_#_3
	mas.pop();
	ok();
}



function sh(){				//Task_#_4
	mas.shift();
	ok();
}

function pu(){				//Task_#_5
	var in1 = document.getElementById('in1').value;
	var zn2 = document.getElementById('zn2').value;

	mas.push(zn2);
	ok();
}

function un(){				//Task_#_6
	var in1 = document.getElementById('in1').value;
	var zn2 = document.getElementById('zn2').value;
	mas.unshift(zn2);
	ok();
}