function kereses(){
    let beev= document.getElementById("beev").value
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x=>x.json())
    .then(y=>{
        let sz=""
        
        y.prizes.forEach(elem => {
            if (elem.year==beev){
            sz+=`
            <p style="font-size:20px; text-decortion:underline;color:blue>
                ${elem.year} ${elem.category}
            </p>
                `
                for (const elemember of elem.laureates) {
                    sz+=`
                    <p style="font-size:15px>; font-style:italic"> 
                    ${elemember.surname}
                    </p>
                    <p style="font-size:10px">
                    ${elemember.motivation}
                    </p>
                    `
                }
                sz+= `<hr>`



            }
        });
            if(sz="")
                sz+="nincs találat"
            document.getElementById("kiadat").innerHTML=sz
        })
}