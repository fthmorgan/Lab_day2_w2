// global variables
const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]

// functions
function hunterAssigner() {
  let randomNumber = Math.floor(Math.random() * people.length)
  let randomHunter = people[randomNumber]
  randomHunter.isHunter = true
  console.log('random hunter', randomHunter);
}

function locationAssigner() {
  people.forEach(person => {
    let randomNumber = Math.floor(Math.random() * locations.length)
    let randomLocation = locations[randomNumber]
    person.location = randomLocation
    console.log('person at random location', randomLocation)
  });
}

function drawPersonPicture() {
  locations.forEach(location => {
    let filteredPeople = people.filter(person => person.location == location)
    let pictureArray = filteredPeople.map(person => person.picture)
    let peopleString = pictureArray.join('')
    console.log(pictureArray);
  });
}

const locationOneElement = document.getElementById('locationOne')
locationOneElement.innerText = peopleString

// running functions
hunterAssigner()
locationAssigner()
drawPersonPicture()
