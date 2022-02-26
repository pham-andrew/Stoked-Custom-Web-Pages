
//hardware calculator
var longside=0, shortside=0;
function func3(){
  longside=
  parseFloat(document.getElementById("deckthickness").value)
  +parseFloat(document.getElementById("riserthickness").value)
  +parseFloat(document.getElementById("wedgethickness").value)
  +parseFloat(document.getElementById("baseplatethickness").value)
  +(2.5 * Math.sin(parseFloat(document.getElementById("wedgeangle").value) * (Math.PI / 180))) 
    / Math.sin((90-parseFloat(document.getElementById("wedgeangle").value)) * ( Math.PI / 180))
  +0.25//nut thickness
  +0.005;//ensure round up
             
  shortside=
  parseFloat(document.getElementById("deckthickness").value)
  +parseFloat(document.getElementById("riserthickness").value)
  +parseFloat(document.getElementById("wedgethickness").value)
  +parseFloat(document.getElementById("baseplatethickness").value)
  +(0.25 * Math.sin(parseFloat(document.getElementById("wedgeangle").value) * (Math.PI / 180))) 
    / Math.sin((90-parseFloat(document.getElementById("wedgeangle").value)) * ( Math.PI / 180))
  +0.25//nut thickness
  +0.005;//ensure round up
  
  //limit under 90 degrees
  if(document.getElementById("wedgeangle").value>89)
    document.getElementById("wedgeangle").value='0';
  
  document.getElementById("shortside").innerHTML=shortside.toFixed(2);
  document.getElementById("longside").innerHTML=longside.toFixed(2);
  
  //change the link for correctly sized hardware
  if(shortside<=3.0)
    document.getElementById('shortlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925769');
  if(shortside<=2.5)
    document.getElementById('shortlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925641');
  if(shortside<=2.25)
    document.getElementById('shortlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925577');
  if(shortside<=2.0)
    document.getElementById('shortlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925449');
  if(shortside<=1.75)
    document.getElementById('shortlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925385');
  if(shortside<=1.5)
    document.getElementById('shortlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925257');
  if(shortside<=1.25)
    document.getElementById('shortlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925193');
  if(shortside<=1.0)
    document.getElementById('shortlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925001');
  
  if(longside<=3.0)
    document.getElementById('longlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925769');
  if(longside<=2.5)
    document.getElementById('longlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925641');
  if(longside<=2.25)
    document.getElementById('longlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925577');
  if(longside<=2.0)
    document.getElementById('longlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925449');
  if(longside<=1.75)
    document.getElementById('longlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925385');
  if(longside<=1.5)
    document.getElementById('longlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925257');
  if(longside<=1.25)
    document.getElementById('longlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925193');
  if(longside<=1.0)
    document.getElementById('longlink').setAttribute('href', 'https://stokedrideshop.com/products/fireball-dragon-stainless-steel-skateboard-hardware-set?variant=41129925001');
}

//slides
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

