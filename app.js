//กำหนดจำนวนผู้ที่เข้ารับการคัดสรร
var num = prompt("จำนวนผู้ที่มาคัดเลือก") 

var plusRav = ""
var plusGry = ""
var plusSly = ""
var plusHuf = ""
var sumRav = 0
var sumGry = 0
var sumSly = 0
var sumHuf = 0
var average = num/4
var nam_sumRav = ""
var nam_sumGry = ""
var nam_sumSly = ""
var nam_sumHuf = ""
for(var i = 0 ; i<num ; i++){
    var name = prompt("กรอกชื่อ-สกุลของผู้ที่จะรับการตัดสรร")
    var random = parseInt(Math.floor(Math.random()*4))    
    if(random == 1 && sumRav <= average){
        var plusRav = "1"
       alert("คุณถูกคัดเลือกให้อยู่บ้าน Ravenclaw")
        var sumRav = parseInt (sumRav)+parseInt (plusRav)
        var nam_sumRav = nam_sumRav+"<br>"+ name
    }
    else if(random==2 && sumGry <= average){
        var plusGry = "1"
       alert("คุณถูกคัดเลือกให้อยู่บ้าน Gryffindor")
        var sumGry = parseInt (sumGry)+parseInt (plusGry)
        var nam_sumGry = nam_sumGry+"<br>"+ name 
    }
    else if(random==3 && sumSly <= average){
        var plusSly = "1"
      alert("คุณถูกคัดเลือกให้อยู่บ้าน Slytherin")
       var sumSly = parseInt (sumSly)+parseInt (plusSly)
       var nam_sumSly = nam_sumSly+"<br>"+ name
    }
    else  {
        var plusHuf = "1"
      alert("คุณถูกคัดเลือกให้อยู่บ้าน Hufflepuff")
       var sumHuf = parseInt (sumHuf)+parseInt (plusHuf)
       var nam_sumHuf = nam_sumHuf+"<br>"+ name
    }
      
    
}
document.getElementById("sum-Ravenclaw").innerHTML+=" มีทั้งหมด "+ sumRav +" คน "+nam_sumRav
document.getElementById("sum-Gryffindor").innerHTML+=" มีทั้งหมด "+ sumGry +" คน "+nam_sumGry
document.getElementById("sum-Slytherin").innerHTML+=" มีทั้งหมด "+ sumSly +" คน "+nam_sumSly
document.getElementById("sum-Hufflepuff").innerHTML+=" มีทั้งหมด "+sumHuf+" คน "+nam_sumHuf


