arr=[];
function letread(dd){
	console.log(dd);
	   document.getElementById(dd).style.display="none";
	   document.getElementById("desc"+dd.slice(4,)).innerHTML=arr[parseInt(dd.slice(4,))-1]+"<a id='"+`rdls${dd.slice(4,)}`+"' onclick='readls(id)'>Read Less</a>";
   }
   function readls(dk){
	   document.getElementById(dk).style.display="none";
	   document.getElementById("desc"+dk.slice(4,)).innerHTML=arr[parseInt(dk.slice(4,))-1].slice(0,40)+"<a id='"+`rmdr${dk.slice(4,)}`+"' onclick='letread(id)'>Read More</a>";
   }
i=1;
for(i=1;i<=3;i++){
   j=0;
   sss=document.getElementById("desc"+i).innerText
   arr.push(sss);
   l=sss.length;
   if(l>40){
	   document.getElementById("desc"+i).innerHTML=arr[i-1].slice(0,40)+"<a id='"+`rmdr${i}`+"' onclick='letread(id)'>Read More</a>";
   }
}