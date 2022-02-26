
//bushing calculator
function func1(){
	//display correct theme for weight
  	//if pounds
	if(lbs==true){
		if(document.getElementById("amount").value>=200)
			document.getElementById('theme').className = "theme-200plus";
		if(document.getElementById("amount").value>=170
				&& document.getElementById("amount").value<200)
			document.getElementById('theme').className = "theme-200-170";
		if(document.getElementById("amount").value>=140
				&& document.getElementById("amount").value<170)
			document.getElementById('theme').className = "theme-170-140";
		if(document.getElementById("amount").value>=100
				&& document.getElementById("amount").value<140)
			document.getElementById('theme').className = "theme-140-100";
		if(document.getElementById("amount").value<100)
			document.getElementById('theme').className = "theme-100-50";
		if(document.getElementById("amount").value>500)
          	alert("Please seek medical consultation.");
		}
	
	//if kgs
	if(lbs==false){
		if(document.getElementById("amount").value>=200*0.45)
			document.getElementById('theme').className = "theme-200plus";
		if(document.getElementById("amount").value>=170*0.45
				&& document.getElementById("amount").value<200*0.45)
			document.getElementById('theme').className = "theme-200-170";
		if(document.getElementById("amount").value>=140*0.45
				&& document.getElementById("amount").value<170*0.45)
			document.getElementById('theme').className = "theme-170-140";
		if(document.getElementById("amount").value>=100*0.45
				&& document.getElementById("amount").value<140*0.45)
			document.getElementById('theme').className = "theme-140-100";
		if(document.getElementById("amount").value<100*0.45)
			document.getElementById('theme').className = "theme-100-50";
      	if(document.getElementById("amount").value>500)
          	alert("Please seek medical consultation.");
		}
	
		//restart animations
		var element = document.getElementById("charts");
		var newone = element.cloneNode(true);
		element.parentNode.replaceChild(newone, element);
  		
  		//theme output for error checking
  		//alert(document.getElementById('theme').className);
  		//document.getElementById("weight").innerHTML=document.getElementById('theme').className;
}
 
//change from lbs to kgs
var lbs = true;
function func2(){
	if (lbs == true){
		document.getElementById("weight").innerHTML='kgs';
		lbs=false;
	}
	else{
		document.getElementById("weight").innerHTML='lbs';
		lbs=true;
	}
	
	//restart animations
	var element = document.getElementById("charts");
	var newone = element.cloneNode(true);
	element.parentNode.replaceChild(newone, element);
	func1();
}
