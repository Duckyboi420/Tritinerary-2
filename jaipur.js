const mainMonuments = document.querySelector(".main-monuments");
const monuments = ["Hawa-Mahal", "City Palace", "Jantar-Mantar", "Amber fort"]



const details = {
  "Hawa-Mahal": "Hawa Mahal (English translation: The Palace of Winds or The Palace of Breeze) is a palace in Jaipur, India approximately 300 kilometers from the capital city of Delhi. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.",
  "City Palace": "The City Palace, Jaipur was established at the same time as the city of Jaipur, by Maharaja Sawai Jai Singh II, who moved his court to Jaipur from Amber, in 1727. Jaipur is the present-day capital of the state of Rajasthan, and until 1949 the City Palace was the ceremonial and administrative seat of the Maharaja of Jaipur. The Palace was also the location of religious and cultural events, as well as a patron of arts, commerce, and industry.",
  "Jantar-Mantar": "The Jantar Mantar, Jaipur is a collection of 19 astronomical instruments built by the Rajput king Sawai Jai Singh II, the founder of Jaipur, Rajasthan. The monument was completed in 1734. It features the world's largest stone sundial, and is a UNESCO World Heritage site. It is near City Palace and Hawa Mahal. The instruments allow the observation of astronomical positions with the naked eye. The observatory is an example of the Ptolemaic positional astronomy which was shared by many civilizations.",
  "Amber fort": "Amber Fort or Amer Fort is a fort located in Amber, Rajasthan, India. Amber is a town with an area of 4 square kilometres (1.5 sq mi) located 11 kilometres (6.8 mi) from Jaipur, the capital of Rajasthan.The town of Amber and the Amber Fort was built by Raja Alan Singh Chanda belonging to a sub clan of Meenas in 967 AD."

}



const jaipurMonumentsImage ={
  "Hawa-Mahal" : "https://images.unsplash.com/photo-1617516202907-ff75846e6667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80",
  "City Palace":"https://images.unsplash.com/photo-1575135356678-a5bc4c58a2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "Jantar-Mantar": "https://images.unsplash.com/photo-1534757725210-578f70abd381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
  "Amber fort": "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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