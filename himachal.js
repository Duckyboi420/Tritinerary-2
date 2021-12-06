const mainMonuments = document.querySelector(".main-monuments");
const monuments = ["Kasol", "Shimla", "Kasauli", "Manali"]



const details = {
  "Kasol": "Kasol is a hamlet in the district Kullu of the Indian state of Himachal Pradesh. It is situated in Parvati Valley, on the banks of the Parvati River, on the way between Bhuntar and Manikaran. It is located 30 km (19 mi) from Bhuntar[5] and 3.5 km (2.2 mi) from Manikaran. Kasol is the Himalayan hotspot for backpackers",
  "Shimla": "Shimla also known as Simla, is the capital and the largest city of the Northern Indian state of Himachal Pradesh. In 1864, Shimla was declared as the summer capital of British India. After independence, the city became the capital of Punjab and was later made the capital city of Himachal Pradesh. It is the principal commercial, cultural and educational centre of the state.",
  "Kasauli": "Kasauli is a cantonment and town, located in Solan district in the Indian state of Himachal Pradesh. The cantonment was established by the British Raj in 1842 as a Colonial hill station, 77 km from Shimla, 65 km from Chandigarh, and 94 km from Ambala Cantt (Haryana), an important railway junction of North India.",
  "Manali": "One of the most popular hill stations in Himachal, Manali offers the most magnificent views of the Pir Panjal and the Dhauladhar ranges covered with snow for most parts of the year. With the Covid-19 pandemic going on, Manali has evolved to be a place loved by young people looking for longer stays for workation."

}



const jaipurMonumentsImage ={
  "Kasol" : "https://images.unsplash.com/photo-1546180801-a9b3dd6ad440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
  "Shimla":"https://images.unsplash.com/photo-1593183981460-e9276b5a5587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80",
  "Kasauli": "https://images.unsplash.com/photo-1504384285672-b55de358b110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80", 
  "Manali": "https://images.unsplash.com/photo-1510987216810-99a82775a158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1182&q=80",
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