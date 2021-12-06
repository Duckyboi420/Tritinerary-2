const mainMonuments = document.querySelector(".main-monuments");
const monuments = ["Alleppey", "Wayanad", "Cochin", "Munnar"]



const details = {
  "Alleppey": "Alappuzha, also known by its former name Alleppey, is the administrative headquarters of Alappuzha district in the Indian state of Kerala. Alleppey is a city and a municipality in Kerala with an urban population of 174,164[1] and ranks third among the districts in literacy rate in the state. In 2016, the Centre for Science and Environment rated Alappuzha as the cleanest town in India.",
  "Wayanad": "Wayanad, is an Indian district in the north-east of Kerala state with administrative headquarters at the municipality of Kalpetta. It is the sole Plateau in Kerala. The Wayanad Plateau forms a continuation of Mysore Plateau, which is the southern portion of Deccan Plateau. It is set high on the Western Ghats with altitudes ranging from 700 to 2100 meters.",
  "Cochin": "Kochi, formerly known in English as Cochin is a major port city on the Malabar Coast of India bordering the Laccadive Sea, which is a part of the Arabian Sea. It is part of the district of Ernakulam in the state of Kerala and is often referred to as Ernakulam. Kochi is the most densely populated city in Kerala.",
  "Munnar": "Munnar, IPA: [muːn̪ːɐːr], is a town and hill station on Western Ghats mountain ranges located in the Idukki district of the southwestern Indian state of Kerala. Munnar is situated at around 1,600 metres (5,200 ft) above mean sea level,[3] in the Western Ghats mountain range. Munnar is also called the 'Kashmir of South India' and is a popular honeymoon destination."

}



const jaipurMonumentsImage ={
  "Alleppey" : "https://images.unsplash.com/photo-1593417033942-bcdf26b74700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
  "Wayanad":"https://images.unsplash.com/photo-1623302485960-d61687113a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
  "Cochin": "https://images.unsplash.com/photo-1629064511726-841ce84f39df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80", 
  "Munnar": "https://images.unsplash.com/photo-1605531321045-59731b348442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

id = [1,2,3,4,5];



function displayPlaces(){
  monuments.forEach(monument => {
    const newdiv = document.createElement('div');
    newdiv.classList.add("temp");
    newdiv.innerHTML = `
    <div class = "img-container"> 
    <img  class = "place-img" src = ${jaipurMonumentsImage[monument]}>
    <div class = "overview">
    ${details[monument]}
    </div>
    </div>
  `;
  mainMonuments.appendChild(newdiv);
  })

}
displayPlaces();

// var count = 0;
// delhi.addEventListener("click", () =>{
//   mainMonuments.innerHTML = ``;
//   delhiMonumentsName.forEach(monument => {
//     const newdiv = document.createElement('div');
//     newdiv.classList.add("temp");
//     newdiv.innerHTML = `
//     <div class = "img-container"> 
//     <img  class = "place-img" src = ${delhiMonumentsImage[monument]}>
//     <div class = "overview">
//     Anant ipsum dolor, sit amet consectetur adipisicing elit. Nobis consequatur illo id iure ipsa excepturi suscipit, dolorum voluptate rem quasi aliquam facere quod doloribus molestias vero cumque inventore. Culpa, quos.
//     </div>
//     </div>
//     <button id = ${id[count]}> Add </button>
//   `;
//   mainMonuments.appendChild(newdiv);
//   count = count+1;
//   });
// })