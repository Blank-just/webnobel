
function keresesnev(){
    let benev=document.getElementById("benev").value
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x=>x.json())
    .then(y=>nevmegjelenit(y,benev))
}

function nevmegjelenit(y,benev){
    let sz=`
      <table class="table table-striped">
    <thead>
      <tr>
        <th>Év,Kategória</th>
        <th>Keresztnév</th>
        <th>Vezetéknév</th>
        <th>Indok</th>
      </tr>
    </thead>
        <tbody>

      
        
  `

    for (const elem of y.prizes) {
        if (elem.laureates!=undefined)
        for (const alelem of elem.laureates) {
            if (alelem.firstname.toLowerCase().includes(benev.toLowerCase()) || alelem.motivation.toLowerCase().includes(benev.toLowerCase()) ){
                console.log(alelem.firstname)
                sz+=`
                <tr>
                    <td>${elem.year} ${elem.category}</td>
                    <td>${alelem.firstname}</td>
                    <td>${alelem.surname}</td>
                    <td>${alelem.motivation}</td>
                    
                </tr>
                `
            }
            
            if (alelem.surname!=undefined && alelem.surname.toLowerCase().includes(benev.toLowerCase()) ){
                console.log(alelem.firstname)
                sz+=`
                <tr>
                    <td>${elem.year} ${elem.category}</td>
                    <td>${alelem.firstname}</td>
                    <td>${alelem.surname}</td>
                    <td>${alelem.motivation}</td>
                    
                </tr>
                `
            }
        


        }
        else{
            console.log(elem.year+" "+elem.category)
        }
    }
    sz+=`</tbody>
     </table>`

     document.getElementById("tablazat").innerHTML=sz




}