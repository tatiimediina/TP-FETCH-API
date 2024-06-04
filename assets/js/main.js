const contenido = document.getElementById("pokemon-list")

const ferchtData = async () =>{

  try{

    const pregunta = await fetch("https://rickandmortyapi.com/api/character")
    const data = await pregunta.json();
    const respuesta = data.results
    console.log(respuesta)

  respuesta.forEach(respu => {
    const item = document.createElement("div")
    item.className = "pokemon-container"
    item.innerHTML += `
    <h3>${respu.name}</h3>
    <img src="${respu.image}" alt="${respu.name}">
    `;
    contenido.appendChild(item)
  });
  
  } catch(error){
    console.error("hubo un error")
  }

}

ferchtData()