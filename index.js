async function getPokeMon(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await response.json()
        console.log(data.results)
        const ulElement = document.getElementById("list")
        data.results.forEach((pokemon)=>{
            const liElement = document.createElement("li")
            liElement.innerHTML = `<h2>${pokemon.name}<h2>`
            getPokeMonImage(pokemon.url)
            .then((imageUrl)=>{
                liElement.innerHTML += `<img src="${imageUrl}">`
                console.log(imageUrl)
            })
            ulElement.appendChild(liElement)
        })

    }catch(error){console.log(error)}
}
getPokeMon();



async function getPokeMonImage(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        const imageUrl = data.sprites.front_default
        return imageUrl
    /* const ulElement = document.getElementById("list")
        data.results.forEach((pokemon)=>{
            const liElement = document.createElement("li")
            liElement.innerHTML = `<h2>${pokemon.name}<h2>`
            ulElement.appendChild(liElement)*/
        } catch(error){console.log(error)}
}