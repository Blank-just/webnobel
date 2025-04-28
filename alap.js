fetch("https://api.nobelprize.org/v1/prize.json")
.then(x=>x.json())
.then(y=>megjelenit(y))


let tomb=[]

function megjelenit(y){
    tomb=y
    console.log(y)
    let sz=""
    let sorszam=0
    for (const elem of y.prizes) {
        sz+=`
        <div class="col-sm-3">
            <div class="szegely" data-bs-toggle="modal" data-bs-target="#myModal" 
            onclick="reszletkiir(${sorszam})">
                <p>${elem.year}</p>
                <p>${elem.category}</p>
            </div>
        </div>


        
        `
        sorszam++
    }
    document.getElementById("keret").innerHTML=sz

}



function reszletkiir(sorszam,y){
    console.log(sorszam)
    //alert(JSON.stringify(tomb))
    //console.log(y)
    document.getElementById("modalfej").innerHTML=tomb.prizes[sorszam].year+" "+tomb.prizes[sorszam].category

}