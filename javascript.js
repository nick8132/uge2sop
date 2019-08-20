
function beregn() {
	drawgrid()
	var cordx = document.getElementById("cord1").value
	var cordy = document.getElementById("cord2").value
	var result = document.getElementById("result")
	if(isNaN(cordx.split(",")[0]) || isNaN(cordx.split(",")[1])){
		console.log("not a number");
	}else{
		if(isNaN(cordx.split(",")[0]) || isNaN(cordx.split(",")[1])){
			console.log("not a number");
		}else{
			findab(cordx, cordy)
		}
	}
}
function beregn2() {
	drawgrid()
	var cord = document.getElementById("cord1").value
	var radius = document.getElementById("radius").value
	if(isNaN(cord.split(",")[0]) || isNaN(cord.split(",")[0])){
		console.log("not a number");
	}else{
		if(isNaN(radius)){
			console.log("not a number");
		}else{
			console.log(cord + "|" +radius)
			cirkelberegner(cord, radius)
		}
	}
}
function beregn3() {
	var result = document.getElementById("result")
	var cord = document.getElementById("cord1").value
	var radius = document.getElementById("radius").value
	var cord1 = document.getElementById("cord2").value
	if(isNaN(cord.split(",")[0]) || isNaN(cord.split(",")[0])){
		console.log("not a number");
	}else{
		if(isNaN(radius)){
			console.log("not a number");
		}else{
			if(isNaN(cord1.split(",")[0]) || isNaN(cord1.split(",")[0])){
				console.log("not a number");
			}else{
				if(Math.pow(radius, 2) == peri(cord, cord1)){
					result.innerHTML = "Kordinatet er på cirklen"
					drawcord(cord1)
				}else{
					result.innerHTML = "Kordinatet er ikke på cirklen"
					drawcord(cord1)
				}
			}
		}
	}
}

/*
var cord312 = document.getElementById("cord1").value
	var radius213 = document.getElementById("r").value
	if(isNaN(cord312.split(",")[0]) || isNaN(cord312.split(",")[1])){
		console.log("not a number");
	}else{
		if(isNaN(radius)){
			console.log("not a number");
		}else{
		cirkelberegner(cord312, radius213)
	}
*/
function findab(cord1, cord2) {
	drawcord(cord1)
	drawcord(cord2)
	drawline(cord1, cord2)
	var result = document.getElementById("result")
	cord1 = cord1.split(",")
	cord2 = cord2.split(",")
	cord1x = parseInt(cord1[0])
	cord1y = parseInt(cord1[1])
	cord2x = parseInt(cord2[0])
	cord2y = parseInt(cord2[1])
	console.log(cord1x+cord1y+cord2x+cord2y);
	var a = ((cord2y-cord1y) / (cord2x-cord1x)).toFixed(3)
	var b = cord2y-(a*cord2x).toFixed(2)
	var c = [];c[0]=200;c[1]=a*200+b
	var d = [];d[0]=-200;d[1]=a*-200+b
	drawline(c, d)
	if(b>=0){console.log("f(x)="+a+"x"+"+"+b)}else{console.log("f(x)="+a+"x"+""+b)}
	if(b>=0){result.innerHTML="f(x)="+a+"x"+"+"+b;}else{result.innerHTML="f(x)="+a+"x"+""+b;}
}
function cirkelberegner(ccord, radius) {
	drawcircle(ccord, radius)
	ccord = ccord.split(",")
	console.log("(x-"+ccord[0]+")²+(y-"+ccord[1]+")² = " + radius + "²")
	if(ccord>=0){
		result.innerHTML = "(x-"+ccord[0]+")²+(y-"+ccord[1]+")² = " + radius + "²"
	}else{
		result.innerHTML = "(x"+ccord[0]+")²+(y+"+ccord[1]+")² = " + radius + "²"
	}
}

function drawgrid() {
	var canvas = document.getElementById("myCanvas");
	var C = canvas.getContext("2d");
	C.lineWidth = 1;
	for (var i = (canvas.width / 25); i >= 0; i--) {
		C.beginPath();
		C.strokeStyle = '#9b59b6'
		C.moveTo(25 * i, 0);
		C.lineTo(25 * i, canvas.height);
		C.stroke();
	}
	for (var i = (canvas.height / 25); i >= 0; i--) {
		C.beginPath();
		C.moveTo(0, 25 * i);
		C.lineTo(canvas.width, 25 * i);
		C.stroke();
	}
	C.beginPath();
	C.lineWidth = 10;
	C.strokeStyle = '#000000'
	C.strokeRect(canvas.width/2-5, canvas.height/2-5, 10, 10);
	C.beginPath();
	C.moveTo(canvas.width/2, 0)
	C.lineTo(canvas.width/2, canvas.height)
	C.lineWidth = 5
	C.stroke()
	C.beginPath();
	C.moveTo(0, canvas.height/2)
	C.lineTo(canvas.width, canvas.height/2)
	C.stroke()
}

function drawcord(a) {
	var canvas = document.getElementById("myCanvas");
	var C = canvas.getContext("2d");
	a=a.split(",")
	var centerY = canvas.width/2
	var centerX = canvas.height/2
	C.beginPath();
	C.lineWidth = 10;
	C.strokeStyle = '#c0392b'
	C.strokeRect(centerY+(25*a[0])-1, centerX+(25*(-1*a[1]))-1, 2, 2);
}
//centerY+(25*a[0])-3, centerX+(25*(-1*a[1]))-3
function drawline(a, b) {
	var canvas = document.getElementById("myCanvas");
	var C = canvas.getContext("2d");
	var centerY = canvas.width/2
	var centerX = canvas.height/2
	C.beginPath();
	C.lineWidth = 3;
	C.strokeStyle = '#c0392b'
	C.moveTo(centerY+(25*a[0]), centerX+(25*(-1*a[1])))
	C.lineTo(centerY+(25*b[0]), centerX+(25*(-1*b[1])))
	C.stroke();
}
function drawcircle(c, r) {
	drawgrid()
	drawcord(c)
	c=c.split(",")
	var canvas = document.getElementById("myCanvas");
	var C = canvas.getContext("2d");
	var centerY = canvas.width/2
	var centerX = canvas.height/2
	C.beginPath();
	C.lineWidth = 3;
	C.strokeStyle = '#c0392b'
	C.arc(centerY+(25*c[0]), centerX+(25*(-1*c[1])), r*25, 0, 2 * Math.PI);
	C.stroke();
}
function peri(ccord2, ccord3) {
	ccord2 = ccord2.split(",")
	ccord3 = ccord3.split(",")
	return Math.pow((ccord3[0]-ccord2[0]), 2)+Math.pow((ccord3[1]-ccord2[1]) ,2)
}
