const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const map = L.map('map').setView([0,0], 1.5);



// Create a button element
const youtubeButton = document.createElement('button');
youtubeButton.textContent = 'Watch our Documentary on YouTube';
youtubeButton.classList.add('youtube-button');

// Append the button to the body
document.body.appendChild(youtubeButton);

// Set the position of the button
youtubeButton.style.position = 'fixed';
youtubeButton.style.top = '10px';
youtubeButton.style.right = '10px';
youtubeButton.style.zIndex = '1000'; // Ensure the button appears above other elements

// Add an event listener to open the YouTube link on button click
youtubeButton.addEventListener('click', function () {
    window.open('https://www.youtube.com/watch?v=fKaTlH9W2Wo', '_blank');
});

// Style the button
youtubeButton.style.backgroundColor = '#000080'; // Set your desired background color
youtubeButton.style.color = '#ffffff'; // Set your desired text color
youtubeButton.style.border = 'none';
youtubeButton.style.borderRadius = '5px';
youtubeButton.style.cursor = 'pointer';
youtubeButton.style.fontWeight = 'bold';


const marker1 = L.marker([21.8182, 90.1398]).addTo(map); // Bangladesh
marker1.bindPopup(
  '<div class="title">Bangladeshi</div> <img class ="tabac" src="Bang.jpeg"> <h4 class="history"> About </h4> <div class="modal-body"> Ran into this amazing guy from Bangladesh at a restaurant where we were grabbing a bite. Turns out he&rsquo;s a fellow NYU alum, just like me, hanging out with his buddies. Been calling Jackson Heights home for a solid 16 years and can&rsquo;t get enough of the fantastic diversity the place offers. Living here has been quite the journey, and he&rsquo;s loving every bit of it!</div>'
  ,
  {
  minWidth:680,
  maxHeight:250
  }
)

const marker2 = L.marker([-1.8312, -78.1834]).addTo(map); // Ecuador
marker2.bindPopup(
  '<div class="title">Ecuadorian</div> <img class ="tabac" src="img.jpeg"> </div> <h4 class="history">About</h4> <div class="modal-body"> We encountered a delightful Ecuadorian woman at a charming bakery in Jackson Heights, where she had dedicated four years of her time. The bakery itself was a culinary haven, boasting mouthwatering cheesecakes. In our conversation, she illuminated the rich tapestry of culinary diversity that defined the area, noting how each street offered a unique and delectable cuisine experience.</div>'
  ,
  {
  minWidth:680,
  maxHeight:250
  }
)

const marker3 = L.marker([25.7494, 89.2611]).addTo(map); // Bangladesh
marker3.bindPopup(
  `<div class="title"> Bangladeshi </div> <img class ="tabac" src="img.jpeg"> </div> <h4 class="history">About</h4> <div class="modal-body"> Met an inspiring Bangladeshi lady who owns a boutique specializing in bridal clothing. She arrived in Jackson Heights in 1996 and embarked on her entrepreneurial journey, sharing that her business has flourished. Specializing in Indian bridal attire, she has found a home in Jackson Heights and loves the vibrant community that surrounds her store.</div>`,
  {
  minWidth:680,
  maxHeight:250
  }
)


// Dominican Republic
const marker4 = L.marker([18.7357, -70.1627]).addTo(map); 
marker4.bindPopup(
  `<div class="title"> Dominican </div> <img class ="tabac" src="DR.jpeg"> </div> <h4 class="history">About</h4> <div class="modal-body"> Encountered a friendly individual from the Dominican Republic. Originally from the Bronx, he ventured to Jackson Heights for work on the advice of his uncle. Following his uncle's guidance, he embraced the opportunity and is thoroughly enjoying his experience here.</div>`,
  {
  minWidth:680,
  maxHeight:250
  }
)

// Peru
const marker5 = L.marker([-9.1900, -75.0152]).addTo(map); 
marker5.bindPopup(
  `<div class="title"> Peruvian </div> <img class ="tabac" src="Peru.jpeg"> </div> <h4 class="history">About</h4> <div class="modal-body"> Encountered a warm-hearted Peruvian woman during my travels. She arrived in Jackson Heights, captivated by its vibrancy and liveliness. Although she found the area to be energetic, she opted not to raise her children there and aimed for a more education-focused district. Her perspective highlighted the diverse facets of Jackson Heights.</div>`,
  {
  minWidth:680,
  maxHeight:250
  }
)

// _______________________________________________________________________________________________________________________________

// India

const marker6 = L.marker([20.5937, 78.9629]).addTo(map);

// Add a custom class to the marker's icon
marker6._icon.classList.add("huechange");

const popupContent = "India";

marker6.bindPopup(popupContent);

marker6.on("mouseover", function () {
    this.openPopup();
});

marker6.on("mouseout", function () {
    this.closePopup();
});


// India

const marker7 = L.marker([31.5204, 74.3587]).addTo(map);

// Add a custom class to the marker's icon
marker7._icon.classList.add("huechange");

const popupContent1 = "Pakistan";

marker7.bindPopup(popupContent1);

marker7.on("mouseover", function () {
    this.openPopup();
});

marker7.on("mouseout", function () {
    this.closePopup();
});


// Afghanistan

const marker8 = L.marker([33.9391, 67.7100]).addTo(map);

// Add a custom class to the marker's icon
marker8._icon.classList.add("huechange");

const popupContent2 = "Afghanistan";

marker8.bindPopup(popupContent2);

marker8.on("mouseover", function () {
    this.openPopup();
});

marker8.on("mouseout", function () {
    this.closePopup();
});



// Philippines

const marker9 = L.marker([12.8797, 121.7740]).addTo(map);

// Add a custom class to the marker's icon
marker9._icon.classList.add("huechange");

const popupContent3 = "Philippines";

marker9.bindPopup(popupContent3);

marker9.on("mouseover", function () {
    this.openPopup();
});

marker9.on("mouseout", function () {
    this.closePopup();
});


// China

const marker10 = L.marker([35.8617, 104.1954]).addTo(map);

// Add a custom class to the marker's icon
marker10._icon.classList.add("huechange");

const popupContent4 = "China";

marker10.bindPopup(popupContent4);

marker10.on("mouseover", function () {
    this.openPopup();
});

marker10.on("mouseout", function () {
    this.closePopup();
});

// Mexico 

const marker11 = L.marker([23.6345, -102.5528]).addTo(map);

// Add a custom class to the marker's icon
marker11._icon.classList.add("huechange");

const popupContent5 = "Mexico";

marker11.bindPopup(popupContent5);

marker11.on("mouseover", function () {
    this.openPopup();
});

marker11.on("mouseout", function () {
    this.closePopup();
});


// Brazil

const marker12 = L.marker([-14.2350, -51.9253]).addTo(map);

// Add a custom class to the marker's icon
marker12._icon.classList.add("huechange");

const popupContent6 = "Brazil";

marker12.bindPopup(popupContent6);

marker12.on("mouseover", function () {
    this.openPopup();
});

marker12.on("mouseout", function () {
    this.closePopup();
});

// Nepal

const marker13 = L.marker([28.3949, 84.1240]).addTo(map);

// Add a custom class to the marker's icon
marker13._icon.classList.add("huechange");

const popupContent7 = "Nepal";

marker13.bindPopup(popupContent7);

marker13.on("mouseover", function () {
    this.openPopup();
});

marker13.on("mouseout", function () {
    this.closePopup();
});

// South Korea

const marker14 = L.marker([35.9078, 127.7669]).addTo(map);

// Add a custom class to the marker's icon
marker14._icon.classList.add("huechange");

const popupContent8 = "South Korea";

marker14.bindPopup(popupContent8);

marker14.on("mouseover", function () {
    this.openPopup();
});

marker14.on("mouseout", function () {
    this.closePopup();
});



var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Key</h4>";
  div.innerHTML += '<i style="background: #3c78be"></i><span>Person</span><br>';
  div.innerHTML += '<i style="background: #d45c8a"></i><span>Ethnicities</span><br>';
  
  

  return div;
};

legend.addTo(map);












// banglasdesh modal 1

// marker.on('click',openModal(modal));
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// Equador Modal

const openModalButtons1 = document.querySelectorAll('[data-modal-target1]')
const closeModalButtons1 = document.querySelectorAll('[data-close-button1]')
const overlay1 = document.getElementById('overlay1')

openModalButtons1.forEach(button => {
  button.addEventListener('click', () => {
    const modal1 = document.querySelector(button.dataset.modalTarget1)
    openModal1(modal1)
  })
})

overlay1.addEventListener('click', () => {
  const modals1 = document.querySelectorAll('.modal1.active')
  modals1.forEach(modal1 => {
    closeModal1(modal1)
  })
})

closeModalButtons1.forEach(button => {
  button.addEventListener('click', () => {
    const modal1 = button.closest('.modal1')
    closeModal1(modal1)
  })
})

function openModal1(modal1) {
  if (modal1 == null) return
  modal1.classList.add('active')
  overlay1.classList.add('active')
}

function closeModal1(modal1) {
  if (modal1 == null) return
  modal1.classList.remove('active')
  overlay1.classList.remove('active')
}



// Bangladesh Modal 2

const openModalButtons2 = document.querySelectorAll('[data-modal-target2]')
const closeModalButtons2 = document.querySelectorAll('[data-close-button2]')
const overlay2 = document.getElementById('overlay2')

openModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget2)
    openModal2(modal2)
  })
})

overlay2.addEventListener('click', () => {
  const modals2 = document.querySelectorAll('.modal2.active')
  modals2.forEach(modal2 => {
    closeModal2(modal2)
  })
})

closeModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = button.closest('.modal2')
    closeModal2(modal2)
  })
})

function openModal2(modal2) {
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay2.classList.add('active')
}

function closeModal2(modal2) {
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay2.classList.remove('active')
}





// Dominican Republic Modal 1

const openModalButtons3 = document.querySelectorAll('[data-modal-target3]')
const closeModalButtons3 = document.querySelectorAll('[data-close-button3]')
const overlay3 = document.getElementById('overlay3')

openModalButtons3.forEach(button => {
  button.addEventListener('click', () => {
    const modal3 = document.querySelector(button.dataset.modalTarget3)
    openModal3(modal3)
  })
})

overlay3.addEventListener('click', () => {
  const modals3 = document.querySelectorAll('.modal3.active')
  modals3.forEach(modal3 => {
    closeModal3(modal3)
  })
})

closeModalButtons3.forEach(button => {
  button.addEventListener('click', () => {
    const modal3 = button.closest('.modal3')
    closeModal3(modal3)
  })
})

function openModal3(modal3) {
  if (modal3 == null) return
  modal3.classList.add('active')
  overlay3.classList.add('active')
}

function closeModal3(modal3) {
  if (modal3 == null) return
  modal3.classList.remove('active')
  overlay3.classList.remove('active')
}




// Peru Modal 1

const openModalButtons4 = document.querySelectorAll('[data-modal-target4]')
const closeModalButtons4 = document.querySelectorAll('[data-close-button4]')
const overlay4 = document.getElementById('overlay4')

openModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal4 = document.querySelector(button.dataset.modalTarget4)
    openModal4(modal4)
  })
})

overlay4.addEventListener('click', () => {
  const modals4 = document.querySelectorAll('.modal4.active')
  modals4.forEach(modal4 => {
    closeModal4(modal4)
  })
})

closeModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal4 = button.closest('.modal4')
    closeModal4(modal4)
  })
})

function openModal4(modal4) {
  if (modal4 == null) return
  modal4.classList.add('active')
  overlay4.classList.add('active')
}

function closeModal4(modal4) {
  if (modal4 == null) return
  modal4.classList.remove('active')
  overlay4.classList.remove('active')
}
/*Legend specific*/

