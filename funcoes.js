var numSort = []
var numDig=[]

function sorteioNum(){
    numSort=[]
    if(numDig.length<6){
        alert("Antes de sortear, digite seis números nos campos!")
    }else{
        numSort=[]
    do{
        let sort = Math.ceil(Math.random()*60)        
        if(!numSort.includes(sort))
            numSort.push(sort) 

    }while(numSort.length<6)

    document.getElementById("numsort").innerHTML=numSort
    verificaAcertos()
    }
}

function getNum(valor, pos){
    valor = Number(valor)
    if(valor>60){
        alert("O valor é maior que 60")
        limpar()
    }else if(valor<=0){
        alert("O valor não pode ser menor que 0" )
        limpar()
    }else if(numDig.includes(valor)){
        alert("O valor já foi digitado!")
        limpar()
    }
    else{
       numDig[pos]=valor
    }

}

function limpar(pos){
    document.getElementById(`num${pos}`).value = ""
}    
    function verificaAcertos(){
        let cont = 0
   numDig.forEach(function(valor,index){
       if(numSort.includes(valor)){
         cont=cont+1
       }

   })
    document.getElementById("total").innerText = cont
   }