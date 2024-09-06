
function stressgame () {
	const stresicon = document.getElementsByClassName ("stress")[0];
	stresicon.style.visibility = "hidden";
	let block = document.getElementsByClassName ("block")[0];
	block.style.visibility = "visible";
	const gamestart = document.getElementsByClassName ("stress")[0];
	let shelf = document.getElementsByClassName ("shelf")[0];
	let foreground = document.getElementsByClassName ("foreground")[0];
	let background = document.getElementsByClassName ("background")[0];
	let ping = document.getElementsByClassName ("things")[0];
	block.style.visibility = "visible";
	
	
	const scoreboard = document.createElement ("p");
	let j = 0;
	scoreboard.innerHTML = 0;
	
	scoreboard.className = "scoreboard";
	document.body.appendChild (scoreboard);
	
	const timer = document.createElement ("p");
	let k = 30;
	timer.innerHTML = 30;
	timer.className ="timer";
	document.body.appendChild (timer);
	
	 var l = 100;
	     //vertical position of flash. 
		 let m = 150;
		let timevar2;


class Thing {
	constructor (first, second, className, divName, points) {
		this.first = first;
		this.second = second;
	this.className = className;
	this.divName = divName;
		this.points = points;
	}
	
	     create () {
			
				 ping = document.getElementsByClassName ("things")[0];
				 let ding = document.createElement ("div");
				let thing = document.createElement ("img");
			 block = document.getElementsByClassName ("block")[0];
	 shelf = document.getElementsByClassName ("shelf")[0];
	 foreground = document.getElementsByClassName ("foreground")[0];
	 background = document.getElementsByClassName ("background")[0];
	
				thing.setAttribute ("src", this.first);
				thing.className = this.className;
				thing.second = this.second;
				thing.points = this.points;
				ding.className = this.divName;
				
				ping.appendChild (ding);
				ding.appendChild (thing);
			
			
			};
		}
	 
	
	function newgame () {
		
		for (let a=0; a<48; a++) { let itemdiv = document.getElementsByClassName ("itemdiv") [0]; ping.removeChild (itemdiv) [a]; 
		let ran = Math.round (10 * Math.random ());
		 arr[ran].create ();
		  
	var timevar4;
		 let itemy = document.getElementsByClassName ("item") [47];
		 itemy.onclick = function () { clearTimeout(timevar4); if  (this.src.includes ('1'))
	{scoreboard.innerHTML = j = j + this.points; this.src = this.second; l = 0; m = 30; this.parentElement.appendChild (flash) ;  pointup.innerHTML = this.points; this.parentElement.appendChild (pointup); 
		let pareles = this.parentElement;   timevar4 = setTimeout (function () {pareles.removeChild (flash); pareles.removeChild (pointup); }, 2000); } //problem; the node to be removed is not a child of this node
		 else { scoreboard.innerHTML = j = j + 0;}}
		 }	 
			 	
		}

	function times (){
		
		timer.innerHTML = k = k - 1;
		if (k > -1) {
		setTimeout (times, 1000);}
		
		else {let z = confirm ("game over, your score is " + scoreboard.innerHTML + " Would you like to play again?");
		if (z == true) {setTimeout (times, 1000); timer.innerHTML = 30; k = 30; scoreboard.innerHTML = 0; j = 0; 
			newgame ()
			
				
			}
		   

	
 else {alert ("no then"); document.body.removeChild (scoreboard); document.body.removeChild (timer); 
 for (let a=0; a<48; a++) { let itemdiv = document.getElementsByClassName ("itemdiv") [0]; ping.removeChild (itemdiv) [a];}

	block.style.visibility = "hidden";
	stresicon.style.visibility = "visible";
}
 }
		 
			
	}
	

	setTimeout (times, 1000);
	
		const item1 = new Thing ("images2/omgegg1.png", "images2/omgegg2.png", "item", "itemdiv", -10);
		const item2 = new Thing ("images2/omgbal1.png", "images2/omgbal2.png", "item", "itemdiv", 2);
		const item3 = new Thing ("images2/omgjug1.png", "images2/omgjug2.png", "item", "itemdiv", 5);
		const item4 = new Thing ("images2/omgmel1.png", "images2/omgmel2.png", "item","itemdiv", 10);
		const item5 = new Thing ("images2/omgtom1.png", "images2/omgtom2.png", "item", "itemdiv", 6);
		const item6 = new Thing ("images2/omgmir1.png", "images2/omgmir2.png", "item", "itemdiv", 7);
		const item7 = new Thing ("images2/omgchair1.png", "images2/omgchair2.png", "item", "itemdiv", 11);
		const item8 = new Thing ("images2/stressjar1.png", "images2/stressjar2.png", "item", "itemdiv", 20);
		
		let arr = [item1, item2, item3, item4, item5, item6, item7, item1, item8, item4, item2, item1];
		console.log (item2);
		let flash = document.createElement ("img"); 
		flash.className = "flash";
		flash.src = "images2/flash.png"; 
		flash.style.position = "absolute";

		let pointup = document.createElement ("p");
	     pointup.className = "pointup";
	     pointup.style.position = "absolute";
	     
                function bang () {
		      
		       
		    
				flash.style.top = " " + (l = l - 5) + "px" + " ";
				flash.style.width = "100px";
				flash.style.zIndex = "20";
				pointup.style.zIndex = "21";
				pointup.style.top = " " + (m = m - 8) + "px" + " ";
			
				timevar2 = setTimeout (function (){bang ()}, 100);
			    
			     
				} 
                 
               bang ();

	for (let i=0; i<48; i++) {
	 
		let ran = Math.round (10 * Math.random ());		

  arr[ran].create ();  
   
	var timevar3;
let items = document.getElementsByClassName ("item") [i];

items.onclick = function () {clearTimeout(timevar3); l = 0; m = 30; if (this.src.includes ('1')) { scoreboard.innerHTML = j = j + this.points; this.src = this.second; 
	this.parentElement.appendChild (flash);
	 pointup.innerHTML = this.points; this.parentElement.appendChild (pointup);
	const parele = this.parentElement; 
 timevar3 = setTimeout (function () {parele.removeChild (flash);  parele.removeChild (pointup); 
 }, 2000); } else { scoreboard.innerHTML = j = j + 0;}}

}
}
	

