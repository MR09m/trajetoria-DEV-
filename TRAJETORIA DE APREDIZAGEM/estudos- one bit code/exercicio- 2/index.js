var nick1 = prompt("qual e o nome do primeiro carro ?")
var v1 = parseFloat( prompt("qual a velocidade do veiculo"))
var nick2 = prompt("qual e o nome do segundo carro ?")
var v2 = parseFloat( prompt("qual a velocidade do veiculo"))

if (v1>v2){alert( nick1+"e mais rapido que " + nick2 )}
else if (v1<v2){alert( nick2 +"e mais rapido que " + nick1 )}
else {alert( nick1+"tem a mesma velocidade  " + nick2 )}






