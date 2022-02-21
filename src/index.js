console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', ()=>{
    //chalenge 1
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then (res => res.json())
    .then (data => {
        let dogURLarray = data.message
        dogURLarray.forEach(dogURL=>{
            let dogDiv = document.createElement('div')
            dogDiv.innerHTML = `<img src='${dogURL}'>`
            document.querySelector("#dog-image-container").appendChild(dogDiv)
        })
    })

    //chalenge 2
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(data=> {
        let obj = data.message
        for (const beerd in obj){
            let dogLi = document.createElement('li')
            dogLi.innerText = beerd
            dogLi.className = 'dom-li'
            document.querySelector('#dog-breeds').appendChild(dogLi)
        }
    })


    //chalenge3
    let dogUl = document.querySelector('#dog-breeds')
    dogUl.addEventListener('click', (event)=>{
        if(event.target.className === 'dom-li')
        event.target.style.color = 'red'
    })

    //chalenge4
    const dropDown = document.getElementById('breed-dropdown') 
    dropDown.addEventListener('change', (event)=> {
        fetch ('https://dog.ceo/api/breeds/list/all')
        .then(res=>res.json())
        .then((data)=>{
            let dogBreedArray = Object.keys(data.message)
            let filteredArray = dogBreedArray.filter(breed =>{
                return breed.startsWith(event.target.value)
            })
            dogUl.innerHTML = ''
            filteredArray.forEach(breed =>{
                dogUl.innerHTML += `<li class="dom-li"> ${breed}</li>`
            })

        })
    })




})
