const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const map = L.map('map').setView([0,0], 1.5);

const marker1 = L.marker([23.42, 53.84]).addTo(map);
marker1.bindPopup(
  '<div class="title">Tabac by Le Maître</div> <img class ="tabac" src="tabac.jpg"> <h4 class="history"> History and Origin </h4> <div class="modal-body"> Le Maîtres aromas are poetic memories of a master perfumer, the perfect choice for the creative scent-lover. These perfumes are renowned for their truly unique and long-lasting scent. It claims to be a luxury fragrance store with 9 luxury perfumes in stock at the moment. Tabac is a rich, masculine perfume which can be used on formal and casual occasions. Tabac is one of the nine fragrances. </div> <h4 class="Ingredients"> Ingredients </h4> <div class="Ingredients_"> Smoky tobacco is mixed with dark wood tones to create a mysterious and dramatic scent. The top note is Cypriol, the heart notes are Tobacco, Guaiac Wood. The base notes are Benzoin, Leather, Cashmere Wood. </div> <h4 class="rise">Evolution</h4> <div class="rise_"> Le Maître is a very new brand and is yet to evolve. It has spread its roots across the UAE and is on the rise. With its luxury scents, it has attracted many locals as well as tourists. Moreover, it is liked by many upon trying it for the first time. </div>'
  ,
  {
  minWidth:680,
  maxHeight:250
  }
)

const marker2 = L.marker([15.50, 32.55]).addTo(map);
marker2.bindPopup(
  '<div class="title">Bint-El-Sudan</div> <img class ="tabac" src="sudan.jpeg"> </div> <h4 class="history">History and Origin</h4> <div class="modal-body"> Also known as “African Chanel No. 5”, Bint-El-Sudan translates to “daughter of Sudan”. The perfume was made in 1920 by Eric Burgess, a British adventurer. The perfume was advertised by hanging colorful posters in North African cities. It was first sold to African pilgrims on their way to Mecca and  was also used as a currency in trans-Saharan trade. The popularity and success of the perfume is associated not only with its smell but also the perfumes association with progressiveness. The bottle of the perfume shows a naked woman from Nigeria where strict islamic law was in place. </div> <h4 class="Ingredients"> Ingredients </h4> <div class="Ingredients_"> Natural floral notes with emphasis on jasmine, lilac and lily of the valley, with woody notes and undertones of musk and amber. </div> <h4 class="rise"> Evolution </h4> <div class="rise_"> Today the scent remains the same except for a few minute differences due to the availability of raw materials and new rules and regulations. A while ago it was used by women to add to their beauty, however now it is mostly used on wedding nights by both the bride and the groom. '
  ,
  {
  minWidth:680,
  maxHeight:250
  }
)

const marker3 = L.marker([48.85, 2.35]).addTo(map);
marker3.bindPopup(
  `<div class="title"> Bleu de Chanel </div> <img class ="tabac" src="chanel.jpg"> </div> <h4 class="history">History and Origin</h4> <div class="modal-body"> A men's fragrance created by Jacques Polge for French fashion house Chanel, Bleu de Chanel literally means "Chanel's Blue" or "Blue Chanel". Originally released in 2004, Allure Homme Sport was the brand's first men's fragrance and the first from its men's masterbrand since 1990. Olivier Polge formulated the 2018 parfum version after his father Jacques Polge formulated the 2014 eau de toilette version. For twelve years, Gaspard Ulliel served as Bleu de Chanel's ambassador and face, until he passed away in January 2022. </div> <h4 class="Ingredients">Ingredients</h4> <div class="Ingredients_"> Includes notes of bergamot, lemon, grapefruit, “deep blue sea accord”, peppermint, frankincense, pink pepper, nutmeg, ginger, jasmine, cedar, vetiver, patchouli, and labdanum. </div> <h4 class="rise"> Evolution </h4> <div class="rise_"> Bloomingdale's' 2010 Christmas sales were led by Bleu de Chanel, the chain's largest men's fragrance launch ever. According to The NPD Group, in January-October 2011 and January-August 2012, it was the second most popular men's fragrance. In 2016, it was the third most popular men's fragrance. The Fragrance Shop, a British retailer, revealed in June 2021 that Bleu de Chanel was the second most popular fragrance in the country. </div>`,
  {
  minWidth:680,
  maxHeight:250
  }
)

const marker4 = L.marker([-33.92, 18.42]).addTo(map);
marker4.bindPopup(
  `<div class="title">	
       Fettle & Frisson: Cedrus Ombre 
          </div>
      <img class ="tabac" src="Southafrica.jpg">
    </div>
    <h4 class="history">History and Origin</h4>
    <div class="modal-body">
       Two perfumers, Coen Meintjes and Megan Bisschoff, started Fettle & Frisson in Cape Town more than seven years ago. The company specializes in creating perfumes made from plants, such as the 2021 perfume Cedrus Ombre. The scent symbolizes the company's principles of embracing nature and forging close ties with the natural world.

    </div>
  
    <h4 class="Ingredients">Ingredients</h4>
    <div class="Ingredients_">
       Notes of spicy Black Pepper (top), dry Cedar (heart) and creamy Agarwood (base).  
       Woody fragrance with an umber accord of pencil woods, honeyed tobacco and polished leather distilled with a velvety musk nuance. Notes of spicy Black Pepper (top), dry Cedar (heart) and creamy Agarwood (base).  
    </div>
  
    <h4 class="rise">Evolution</h4>
    <div class="rise_">
       Pure alcohol was used in the company's perfume production, which dried out sensitive skin. They now provide substitutes prepared with organic coconut oil.
    </div>`,
  {
  minWidth:680,
  maxHeight:250
  }
)
const marker5 = L.marker([-22.90, -43.17]).addTo(map);
marker5.bindPopup(
  `<div class="title">	
  Brazilian Crush Cheirosa ’62
     </div>
 <img class ="tabac" src="brazil.png">
</div>
<h4 class="history">History and Origin</h4>
<div class="modal-body">
One of Brazil's top exports, along with swimwear, coffee, and samba, is Sol de Janeiro. The best-selling luxury body care company with a Brazil-inspired aesthetic was established in 2015 as a result of a relationship Brazilian native Camila Pierotti made with American expats Heela Yang and Marc Capra. The three became close because of their shared experiences with the nation and its distinctive view of beauty. The body care, hair care, and scent items from the brand are practically a Rio beach in a bottle. Each recipe includes locally grown fruit and plant butters, and the packaging is cheery and sunny with hues of yellow, coral, and turquoise.


</div>

<h4 class="Ingredients">Ingredients</h4>
<div class="Ingredients_">
A body fragrance mist, bursting with an alluring pistachio and salted caramel scent. It belongs to a warm and spicy scent family.

</div>

<h4 class="rise">Evolution</h4>
<div class="rise_">
Sol de Janeiro knew fragrance was going to be a very important part of their brand because along with having beautiful, soft skin, Brazilians love to smell good. The scent of the Bum Bum Cream became so popular that people wanted a perfume out of it. It was then developed as a fine fragrance separate from the cream. It stands out because it's sophisticated but there's still an element of yumminess and deliciousness to it. Now Sol de Janeiro makes sure all of their scents have a gourmand element to it and can also be worn on its own as a fine fragrance.
</div>`,
  {
  minWidth:680,
  maxHeight:250
  }
)
const marker6 = L.marker([30.04, 31.23]).addTo(map);
marker6.bindPopup(
  `<div class="title">	
  KYPHI
     </div>
 <img class ="tabac" src="kyphi.png">
</div>
<h4 class="history">History and Origin</h4>
<div class="modal-body">
  One of the most well-liked varieties of temple incense in ancient Egypt was known as Kyphi, which was also utilized as a treatment for a variety of illnesses.  The term "Kyphi" initially referred to any substance that was used to purify and perfume the air. Like other fragrances in ancient Egypt, kyphi was a sacred scent that was used to honor and perfume the deceased.  
  Kyphi had a wide range of medicinal purposes, including sleep induction, bringing on pleasant dreams, cleaning the environment, beautifying the skin, calming the nerves, treating asthma, and enhancing sex desire.         

</div>

<h4 class="Ingredients">Ingredients</h4>
<div class="Ingredients_">
  Scent of Kyphi initially emits rich, deep, sweet notes of wine, honey and the honeycomb. It also contained terebinth resin, saffron, raisins and cinnamon.

</div>

<h4 class="rise">Evolution</h4>
<div class="rise_">
  Kyphi is still made by companies like Olympic Orchids Artisan Perfumes. Modern Kyphi perfumes aim to encompass the rich Egyptian culture and heritage
</div>`,
  {
  minWidth:680,
  maxHeight:250
  }

)
const marker7 = L.marker([30.26, -97.74]).addTo(map);
marker7.bindPopup(
  `<div class="title">	
  Black Orchid by Tom Ford
     </div>
 <img class ="tabac" src="tomford.jpg">
</div>
<h4 class="history">History and Origin</h4>
<div class="modal-body">
Since its debut in 2006, Tom Ford's Black Orchid fragrance has become a cult favorite in the perfume industry. Black Orchid is a favorite with everyone, from wealthy businessmen to downtown cool girls. It lies in between the lure of primal sensuality and vintage glamor. At first whiff, the perfume is opulent, exotic, and downright tempting. However, as its many fans can attest, as it interacts with your body chemistry, it changes into a velvety blend of musk and sandalwood that doesn't feel particularly masculine or feminine; rather, it just feels opulent.
</div>

<h4 class="Ingredients">Ingredients</h4>
<div class="Ingredients_">
Tom Ford worked with master perfumers to create the iconic Black Orchid Eau de Parfum, a seductive blend of black truffle, ylang-ylang, rum-soaked black plum, vanilla, sandalwood, and, of course, rare black orchid.

</div>

<h4 class="rise">Evolution</h4>
<div class="rise_">

After Black Orchid's debut 14 years ago, Tom Ford is back with a highly concentrated version of the original. With more strong notes of ylang-ylang, rum absolute, and black plum that make it even more seductive, Black Orchid Parfum is a powerful reinterpretation. The new Parfum will be adored by fans of the original Black Orchid Eau de Parfum as well as anyone looking for the ideal opulent, dramatic scent that lasts well into the day (and night).

</div>`,
  {
  minWidth:680,
  maxHeight:250
  }

)
const marker8 = L.marker([55.75, 36.17]).addTo(map);
marker8.bindPopup(
  
        
  `<div class="title">	
   A.Rallet & Co :Bouquet of Catherine
      </div>
  <img class ="tabac" src="russia.jpeg">
</div>
<h4 class="history">History and Origin</h4>
<div class="modal-body">
 Alphonse Rallet founded a soap and perfume production company at 47 Vyatskaya Street in Moscow in the summer of 1843. Rallet arrived in Russia with French technicians and cutting-edge production tools. Rallet initially produced soap, lipstick, pomade, powder, eau de cologne, and perfumery water. In 1913, A. Rallet & Co. released Bouquet of Catherine, which was the brand's first known scent to use aldehydes. Bouquet of Catherine was, by 1923, reborn as Rallet Le No.1. Today, Bouquet de Catherine, is seen as Chanel No.5's predecessor. 



</div>

<h4 class="Ingredients">Ingredients</h4>
<div class="Ingredients_">
 Top notes are Aldehydes, Ylang-Ylang, Neroli, Bergamot and Lemon. Middle notes are iris, Jasmine, Rose, Orris Root and Lily-of-the-Valley. Base notes are Civet, Sandalwood, Amber, Moss, Vetiver, Vanilla and Patchouli.

</div>

<h4 class="rise">Evolution</h4>
<div class="rise_">
 
 Over time, the company began creating scents that projected the ambiance of the country it was created in. The scents produced by the company were described to represent snowy lands and cold climates.

</div>`,
  {
  minWidth:680,
  maxHeight:250
  }

)

const marker9 = L.marker([27.17, 78.04]).addTo(map);
marker9.bindPopup(
  
        
  `<div class="title">	
  Indian Attar
     </div>
 <img class ="tabac" src="india.jpg">
</div>
<h4 class="history">History and Origin</h4>
<div class="modal-body">
Indian Fragrances has long been a thriving center for the trading of aromatics. In India, attar has been around for more than 60,000 years. The ancient Indian epics and Granths make reference to smell and perfume. The rulers would use fragrance to start their day. According to the "Agni Purana," they would bathe in more than 150 different perfumes. The Indus culture, which lasted from 3300 BCE to 1300 BCE, also had scent and perfumery. 


</div>

<h4 class="Ingredients">Ingredients</h4>
<div class="Ingredients_">
20% to 50% of the total weight is concentrated scent. It typically takes between five and ten years and is made up of a variety of extracts. Probably the most well-known essential oil is rose tar. The perfume of rose (Gulab) ittar prevents depression and gives the user vigor. The rose is regarded as "The Queen of Flowers" in Ayurveda because of its romantic and feminine qualities, which are thought to represent unadulterated love. The aroma is in fact reminiscent of freshly cut roses with a foundation of pure sandalwood. 

</div>

<h4 class="rise">Evolution</h4>
<div class="rise_">

The continued survival of this sector has been negatively impacted by the rising price of Indian sandalwood and the increased cost of producing ittars. Chemical-based perfume products, which are less expensive than natural ittars, are a competitor.

</div>`,
  {
  minWidth:680,
  maxHeight:250
  }
)
const marker10 = L.marker([37.98, 23.72]).addTo(map);

marker10._icon.classList.add("huechange");
marker10.bindPopup(`<div class="title">	
  Aristotle
     </div>
 <img class ="tabac" src="aristotle.jpg">
</div>
<!-- <h4 class="history">History and Origin</h4> -->
<div class="modal-body">
Aristotle was a Greek philosopher, born in 384 BC. In addition to his various contributions to philosophy, Aristotle is renowned for his discovery of numerous scientific concepts and his investigation of the connections between them.<br>

In his books De Anima Book II and De Sensu  he extensively talks about the human senses. Aristotle regards the sense of smell to be the most obscure sense that humans possess. He premises his argument on the fact that many other animals have a sense  of smell which is much stronger than the sense of smell of humans. Aristotle also points out how smell and taste are comparable but scents are intrinsically more vague than tastes.<br>
Aristotle also considered the origin of smell. He recognized that for humans the sense of smell is interlinked with the ability to inhale. However for fish or “bloodless creatures” there must be another sense that allows them to detect scent since these creatures do not inhale.  He also points out in his book that the medium for scent is not air or water, but rather something transparent that both of these media share.
</div>`,
  {
  minWidth:680,
  maxHeight:250
  }
)
const marker11 = L.marker([50.08, 10.56]).addTo(map);

marker11._icon.classList.add("huechange");
marker11.bindPopup(`<div class="title">	
Immanuel Kant
  </div>
<img class ="tabac" src="kant.jpg">
</div>
<!-- <h4 class="history">History and Origin</h4> -->
<div class="modal-body">
Immanuel Kant was a German philosopher born in 1724. Kant described the human senses to be the intuition we possess when an object is present. He classified the human senses into objective and subjective senses. Objective senses, according to his classification, provide us with more knowledge of the object while subjective senses provide us with more “enjoyment” of  the object. 

<br>Kant declared the sense of smell to be a more subjective scent. He established a deep connection between taste and smell as both are affected by salt (either salt dissolved by the fluids in air or the mouth).

<br>The most replaceable sense that humans have, according to popular belief, is scent, but Kant challenges this notion and offers numerous evidences indicating the contrary. In addition to its impacts on appetite or aspects like defense against toxic air, the sense of smell has profound social and cognitive implications on people. In contrast to other objective senses Kant labels smell as a "social" sense.

`,
  {
  minWidth:680,
  maxHeight:250
  }
)
const marker12 = L.marker([31.76, 35.21]).addTo(map);
marker12._icon.classList.add("huechange");
marker12.bindPopup(`
        <div class="title">	
          Solomon
            </div>
        <img class ="tabac" src="solomon.jpg">
      </div>
      <!-- <h4 class="history">History and Origin</h4> -->
      <div class="modal-body">
      Solomon (970 to 931 BCE) was the ruler of Israel. Solomon is renowned in Islam, Christianity and Judaism for his wisdom. He was also an accomplished natural philosopher or scientist whose knowledge of trees, plants and animals is highlighted in many religious scriptures.  He is also known to write much of the Book of Proverbs, the Song of Songs, the book of Ecclesiastes, and two psalms. 
 <br>
The Song of Songs is about love and uses the five senses to depict the sensation of erotic love. Throughout the song the sense of smell plays a vital role in depicting the extent and nature of love to the reader. For instance, a lover is likened to a sachet of perfume in the poem. While in other situations, the author makes allusions to scented oils and  perfumed bedsheets, creating a strong connection between the sense of smell and romance.

<br>
 
The Song of Songs places a lot of emphasis on fragrance since it uniquely influences how two people's love is portrayed. The poem would not have conveyed the same level of intimacy or affection without the description of smell.

 
      </div>
`,
  {
  minWidth:680,
  maxHeight:250
  }
)



var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Key</h4>";
  div.innerHTML += '<i style="background: #d45c8a"></i><span>Philosopher</span><br>';
  div.innerHTML += '<i style="background: #3c78be"></i><span>Perfume</span><br>';
  
  

  return div;
};

legend.addTo(map);


















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

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

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

// Pefume no.2

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



// Pefume no.3

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


// Pefume no.4

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


// Pefume no.5

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



// Pefume no.6

const openModalButtons5 = document.querySelectorAll('[data-modal-target5]')
const closeModalButtons5= document.querySelectorAll('[data-close-button5]')
const overlay5 = document.getElementById('overlay5')

openModalButtons5.forEach(button => {
  button.addEventListener('click', () => {
    const modal5 = document.querySelector(button.dataset.modalTarget5)
    openModal5(modal5)
  })
})

overlay5.addEventListener('click', () => {
  const modals5 = document.querySelectorAll('.modal5.active')
  modals5.forEach(modal5 => {
    closeModal5(modal5)
  })
})

closeModalButtons5.forEach(button => {
  button.addEventListener('click', () => {
    const modal5 = button.closest('.modal5')
    closeModal5(modal5)
  })
})

function openModal5(modal5) {
  if (modal5 == null) return
  modal5.classList.add('active')
  overlay5.classList.add('active')
}

function closeModal5(modal5) {
  if (modal5 == null) return
  modal5.classList.remove('active')
  overlay5.classList.remove('active')
}

// Pefume no.7

const openModalButtons6 = document.querySelectorAll('[data-modal-target6]')
const closeModalButtons6= document.querySelectorAll('[data-close-button6]')
const overlay6 = document.getElementById('overlay6')

openModalButtons6.forEach(button => {
  button.addEventListener('click', () => {
    const modal6 = document.querySelector(button.dataset.modalTarget6)
    openModal6(modal6)
  })
})

overlay6.addEventListener('click', () => {
  const modals6 = document.querySelectorAll('.modal6.active')
  modals6.forEach(modal6 => {
    closeModal6(modal6)
  })
})

closeModalButtons6.forEach(button => {
  button.addEventListener('click', () => {
    const modal6 = button.closest('.modal6')
    closeModal6(modal6)
  })
})

function openModal6(modal6) {
  if (modal6 == null) return
  modal6.classList.add('active')
  overlay6.classList.add('active')
}

function closeModal6(modal6) {
  if (modal6 == null) return
  modal6.classList.remove('active')
  overlay6.classList.remove('active')
}

// Pefume no.8

const openModalButtons7 = document.querySelectorAll('[data-modal-target7]')
const closeModalButtons7= document.querySelectorAll('[data-close-button7]')
const overlay7 = document.getElementById('overlay7')

openModalButtons7.forEach(button => {
  button.addEventListener('click', () => {
    const modal7 = document.querySelector(button.dataset.modalTarget7)
    openModal7(modal7)
  })
})

overlay7.addEventListener('click', () => {
  const modals7 = document.querySelectorAll('.modal7.active')
  modals7.forEach(modal7 => {
    closeModal7(modal7)
  })
})

closeModalButtons7.forEach(button => {
  button.addEventListener('click', () => {
    const modal7 = button.closest('.modal7')
    closeModal7(modal7)
  })
})

function openModal7(modal7) {
  if (modal7 == null) return
  modal7.classList.add('active')
  overlay7.classList.add('active')
}

function closeModal7(modal7) {
  if (modal7 == null) return
  modal7.classList.remove('active')
  overlay7.classList.remove('active')
}

// Pefume no.9

const openModalButtons8 = document.querySelectorAll('[data-modal-target8]')
const closeModalButtons8= document.querySelectorAll('[data-close-button8]')
const overlay8 = document.getElementById('overlay8')

openModalButtons8.forEach(button => {
  button.addEventListener('click', () => {
    const modal8 = document.querySelector(button.dataset.modalTarget8)
    openModal8(modal8)
  })
})

overlay8.addEventListener('click', () => {
  const modals8 = document.querySelectorAll('.modal8.active')
  modals8.forEach(modal8 => {
    closeModal8(modal8)
  })
})

closeModalButtons8.forEach(button => {
  button.addEventListener('click', () => {
    const modal8 = button.closest('.modal8')
    closeModal8(modal8)
  })
})

function openModal8(modal8) {
  if (modal8 == null) return
  modal8.classList.add('active')
  overlay8.classList.add('active')
}

function closeModal8(modal8) {
  if (modal8 == null) return
  modal8.classList.remove('active')
  overlay8.classList.remove('active')
}

// Aristotle no.10

const openModalButtons9 = document.querySelectorAll('[data-modal-target9]')
const closeModalButtons9= document.querySelectorAll('[data-close-button9]')
const overlay9 = document.getElementById('overlay9')

openModalButtons9.forEach(button => {
  button.addEventListener('click', () => {
    const modal9 = document.querySelector(button.dataset.modalTarget9)
    openModal9(modal9)
  })
})

overlay9.addEventListener('click', () => {
  const modals9 = document.querySelectorAll('.modal9.active')
  modals9.forEach(modal9 => {
    closeModal9(modal9)
  })
})

closeModalButtons9.forEach(button => {
  button.addEventListener('click', () => {
    const modal9 = button.closest('.modal9')
    closeModal9(modal9)
  })
})

function openModal9(modal9) {
  if (modal9 == null) return
  modal9.classList.add('active')
  overlay9.classList.add('active')
}

function closeModal9(modal9) {
  if (modal9 == null) return
  modal9.classList.remove('active')
  overlay9.classList.remove('active')
}


// Kant no.11

const openModalButtons10 = document.querySelectorAll('[data-modal-target10]')
const closeModalButtons10= document.querySelectorAll('[data-close-button10]')
const overlay10 = document.getElementById('overlay10')

openModalButtons10.forEach(button => {
  button.addEventListener('click', () => {
    const modal10 = document.querySelector(button.dataset.modalTarget10)
    openModal10(modal10)
  })
})

overlay10.addEventListener('click', () => {
  const modals10 = document.querySelectorAll('.modal10.active')
  modals10.forEach(modal10 => {
    closeModal10(modal10)
  })
})

closeModalButtons10.forEach(button => {
  button.addEventListener('click', () => {
    const modal10 = button.closest('.modal10')
    closeModal10(modal10)
  })
})

function openModal10(modal10) {
  if (modal10 == null) return
  modal10.classList.add('active')
  overlay10.classList.add('active')
}

function closeModal10(modal10) {
  if (modal10 == null) return
  modal10.classList.remove('active')
  overlay10.classList.remove('active')
}

// Kant no.12

const openModalButtons11 = document.querySelectorAll('[data-modal-target11]')
const closeModalButtons11= document.querySelectorAll('[data-close-button11]')
const overlay11 = document.getElementById('overlay11')

openModalButtons11.forEach(button => {
  button.addEventListener('click', () => {
    const modal11 = document.querySelector(button.dataset.modalTarget11)
    openModal11(modal11)
  })
})

overlay11.addEventListener('click', () => {
  const modals11 = document.querySelectorAll('.modal11.active')
  modals11.forEach(modal11 => {
    closeModal11(modal11)
  })
})

closeModalButtons11.forEach(button => {
  button.addEventListener('click', () => {
    const modal11 = button.closest('.modal11')
    closeModal11(modal11)
  })
})

function openModal11(modal11) {
  if (modal11 == null) return
  modal11.classList.add('active')
  overlay11.classList.add('active')
}

function closeModal11(modal11) {
  if (modal11 == null) return
  modal11.classList.remove('active')
  overlay11.classList.remove('active')
}



/*Legend specific*/