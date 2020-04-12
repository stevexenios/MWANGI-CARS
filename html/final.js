function grade() {
var score = parseInt(document.getElementById("Text1").value);
		if(score >90){
			document.getElementById("result").value =("A");
		}
		
		else if(score>80){
			document.getElementById("result").value =("B");
		}
		
		else if(score>70){
			document.getElementById("result").value =("C");
		}
		
		else if(score>60){
			document.getElementById("result").value =("D");
		}
		
		else if(score<61){
			document.getElementById("result").value =("F");

var result=score.fontface("Arsenal");
document.getElementById("result").innerHTML=result;		
		}