const mainMonuments = document.querySelector(".main-monuments");
const monuments = ["Srinagar", "Gulmarg", "Sonmarg", "Pahalgam"]



const details = {
  "Srinagar": "Srinagar is the largest city and the summer capital of Jammu and Kashmir, India. It lies in the Kashmir Valley on the banks of the Jhelum River, a tributary of the Indus, and Dal and Anchar lakes. The city is known for its natural environment, gardens, waterfronts and houseboats. It is also known for traditional Kashmiri handicrafts like Kashmir shawls and also dried fruits.",
  "Gulmarg": "Gulmarg, known as Gulmarag in Kashmiri, is a town, a hill station, a popular skiing destination and a notified area committee in the Baramulla district of Jammu and Kashmir, India. The Distance 31 Km from Baramulla and 49 Km from Srinagar. The town is situated in the Pir Panjal Range in the Western Himalayas and lies within the boundaries of Gulmarg Wildlife Sanctuary.",
  "Sonmarg": "Sonamarg or Sonmarg 'meadow of gold' in Kashmiri, is a hill station located in the Ganderbal District of Jammu and Kashmir, India. It is located about 62 Kilometers from Ganderbal Town and 80 kilometres (50 mi) northeast of the capital city, Srinagar",
  "Pahalgam": "Pahalgam known as Pahalgom ('village of shepherds') in Kashmiri, is a town and a notified area committee in Anantnag district of the Indian union territory of Jammu and Kashmir. It is a popular tourist destination and hill station. Its lush green meadows and pristine waters attract thousands of tourists from all over the world each year."

}



const jaipurMonumentsImage ={
  "Srinagar" : "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "Gulmarg":"https://images.unsplash.com/photo-1523815119304-615b6b81e704?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "Sonmarg": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
  "Pahalgam": "https://images.unsplash.com/photo-1587020319791-74ecee4229d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
};

id = [1,2,3,4,5];
count =0;



function displayPlaces(){
  monuments.forEach(monument => {
    const newdiv = document.createElement('div');
    newdiv.classList.add("temp");
    newdiv.innerHTML = `
    <div class = "img-container"> 
    <img  class = "place-img" src = ${jaipurMonumentsImage[monument]}>
    <div class = "overview">
    Day ${id[count]}: ${details[monument]}
    </div>
    </div>
  `;
  mainMonuments.appendChild(newdiv);
  count++;
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