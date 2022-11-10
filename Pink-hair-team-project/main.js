// Import files :
import './style.css'
import axios from 'axios'

/** Fetch all the characters in the database
* @author Danaé Grosjean
* @param {array} AllCharacters - host the response of the get demand on the data base
* @returns {array} AllCharacters - an array filled with the entries of the database
*/
// async function getAllCharacterAsync() {
//     const response = await axios.get('https://character-database.becode.xyz/characters');

//     const AllCharacters = response.data;
//     return AllCharacters;
// }

// const AllCards = async() => {
//   return await getAllCharacterAsync();
// }

/** Fetch one of the characters in the database by its ID
* @author Danaé Grosjean
* @param {string} value - NEED TO BE CHANGED - an ID to test the function
* @param {object} characterById - host the response of the get demand on the data base
* @returns {object} return the card of a character already in the database
*
*
async function getCharacterByIdAsync() {
  let value = "301bc33c-62fe-4060-8047-45ca196019da";
  const response = await axios.get(`https://character-database.becode.xyz/characters/${value}`);

  let characterById = response.data;
  return characterById;
}
*/

/** Fetch one of the characters in the database by its name
* @author Danaé Grosjean
* @param {string} value - NEED TO BE CHANGED - a name to test the function
* @param {array} characterByName - host the response of the get demand on the data base
* @returns {array} return the card of a character already in the database
*
async function getCharacterByName() {
  let value = "Spiderman";
  const response = await axios.get(`https://character-database.becode.xyz/characters?name=${value}`);

  let characterByName = response.data;
  return characterByName;
}
*/


/** Display all characters in the main html file
* @author Danaé Grosjean
* @returns {array} return in the DOM all the name, image and description of all the database characters, each in a different div
*/

async function displayAllCharacters () {

    const response = await axios.get('https://character-database.becode.xyz/characters');

    const AllCharacters = response.data;

  for (let elem of AllCharacters) {

// Creation of the div to host the card
    let list = document.getElementById('list_character');
    let card = document.createElement('div');
    list.appendChild(card);
    card.classList.add("character");

// Adding the image of the character
    let pic = document.createElement('img');
    card.appendChild(pic);
    pic.src = `data:image/gif;base64,${elem.image}`;
    pic.classList.add("character_img");

// Adding the name of the character
    let title = document.createElement('h2');
    title.textContent = elem.name;
    card.appendChild(title);
    title.classList.add("character_name");

// Adding the small description of the character
    let infoShort = document.createElement('p');
    card.appendChild(infoShort);
    infoShort.textContent = elem.shortDescription;
    infoShort.classList.add("character_infos");

// Adding the button more info on the character
    let infoButton = document.createElement('a');
    card.appendChild(infoButton);
    infoButton.textContent = "More info";
    infoButton.href = `../character.html?id=${elem.id}`;
    infoButton.classList.add("character_buttons");

//  Adding the delete button on the character card
    let delButton = document.createElement('a');
    card.appendChild(delButton);
    delButton.textContent = "Delete";
    delButton.classList.add("character_buttons");
    delButton.classList.add("delete_button");

    delButton.addEventListener("click", async(e) => {
      if(e.target.classList[1] == "delete_button"){
          const result = confirm("Are you sure you want to delete this character ?");
          if (result) {
            console.log("deleted, yes!");
            await axios.delete(`https://character-database.becode.xyz/characters/${elem.id}`);
          }
      }
    });
  }

// Button to add a new character
  let addButton = document.createElement('a');
  let article = document.querySelector('article');
  article.appendChild(addButton);
  addButton.href = `../input.html`;
  addButton.classList.add("addition_button");
  addButton.textContent = "+";
}

displayAllCharacters();
