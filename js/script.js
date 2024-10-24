let result = document.querySelectorAll('.result')

result.forEach((mp)=>{
    let number = 0
    let contNumber = ()=>{
        number++
        mp.innerHTML=number
        if(number== mp.dataset.sconvert){
            clearInterval(stop)
        }
    }
    let stop = setInterval(()=>{
        contNumber()
    }, 2000/mp.dataset.sconvert)
})

