


 const key = "a0c2aad6697d2b1d11d7d01853808c0d"
 
 function dataScreen(dados){
    document.querySelector(".town").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".forecast").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = dados.main.humidity + "%"
    document.querySelector(".cloud").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
 }

 async function searchTown(town){
 const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
 
 dataScreen(dados)

 }

 function clickButton(){
    const town = document.querySelector(".input-town").value
    searchTown(town)
 }

