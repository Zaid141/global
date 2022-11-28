const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

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