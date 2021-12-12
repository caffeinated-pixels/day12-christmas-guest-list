const input = document.getElementById('input')
const listContainer = document.getElementById('list-container')

const btn = document.getElementById('btn')

const guests = [
  'Partner',
  'Nice Relative 1',
  'Nice Relative 2',
  'Evil Relative',
  'Lonely Neighbour',
]

function displayList() {
  listContainer.textContent = ''
  const guestList = document.createElement('ul')
  guestList.className = 'guest-list'

  guests.forEach((guest, i) => {
    const listItem = document.createElement('li')
    listItem.textContent = guest
    listItem.id = i
    guestList.appendChild(listItem)
  })
  listContainer.appendChild(guestList)
}

displayList()

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?
