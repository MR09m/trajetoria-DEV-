let entrada= parseFloat(prompt ("quantos metros voce quer converter ? "))
let medida=prompt("Para qual unidade de medida deseja converter?" +
  "\n1 - milímetros (mm)" +
  "\n2 - centímetros (cm)" +
  "\n3 - decímetros (dm)" +
  "\n4 - decâmetros (dam)" +
  "\n5 - hectômetro (hm)" +
  "\n6 - quilômetro (km)")
let resultado 

switch(medida){
    case"1": resultado= entrada*1000
    alert("o resultado da convercao "+resultado+"mm")
break

case"2": resultado= entrada*100
    alert("o resultado da convercao "+resultado +"cm")
break

case"3": resultado= entrada*10
    alert("o resultado da convercao "+resultado +"dm")
break

case"4": resultado= entrada/10
    alert("o resultado da convercao "+resultado +"dam")
break
case"5": resultado= entrada/100
    alert("o resultado da convercao "+resultado +"hm")
break
case"6": resultado= entrada/1000
    alert("o resultado da convercao "+resultado +"km")
break



}

