
function keresesnev(){
    let benev=document.getElementById("benev").value
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x=>x.json())
    .then(y=>nevmegjelenit(y,benev))
}

function nevmegjelenit(y){
    for (const elem of y.prizes) {
        if (elem.laureates!=undefined)
        for (const alelem of elem.laureates) {
            if (alelem.firstname==benev){
                console.log(alelem.firstname)
            }
            
        }
        else{
            console.log(elem.year+" "+elem.category)
        }
    }
}