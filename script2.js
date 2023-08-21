class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static whosOlder(userA, userB) {
    if (userA.age > userB.age) {
      return userA.firstName + " is older than " + userB.firstName;
    } else if (userA.age < userB) {
      return userB.firstName + " is older than " + userA.firstName;
    } else {
      return "They have the same age";
    }
  }
}

const users = [new User("Flavio", "Neri", "22", "Agrigento"), new User("Federico", "Neri", "26", "Agrigento")];
console.log(User.whosOlder(users[0], users[1]));

const petList = document.getElementById("pet-list");
petList.addEventListener("submit", saveElement);
let list = document.querySelector("ul");
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static isItTheSameOwner(petA, petB) {
    return petA === petB;
  }
}
function saveElement(e) {
  e.preventDefault();
  let pets = new Pet(petList.petname.value, petList.ownerName.value, petList.species.value, petList.breed.value);
  let animalArr = [pets.petName, pets.ownerName, pets.species, pets.breed];

  let animalsOwner = document.querySelectorAll(".owner");
  animalsOwner.forEach((el) => {
    console.log(Pet.isItTheSameOwner(el.innerText, animalArr[1]));
  });

  for (i = 0; i < animalArr.length; i++) {
    let listElement = document.createElement("li");
    listElement.innerText = animalArr[i];
    if (i === 1) {
      listElement.classList.add("owner");
    }
    list.appendChild(listElement);
  }
}
