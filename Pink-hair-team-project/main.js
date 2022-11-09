// Import files :

import './style.css'
import axios from 'axios'

/** Fetch all the characters in the database
* @author Danaé Grosjean
* @param {array ?} AllCharacters - host the response of the get demand on the data base
* @returns {array} AllCharacters - an array filled with the entries of the database
*/

  async function getAllCharacterAsync() {
      const response = await axios.get('https://character-database.becode.xyz/characters');

      let AllCharacters = response.data;
      return AllCharacters;
  }

  let AllCards = await getAllCharacterAsync();
  console.log(AllCards);

/** Fetch one of the characters in the database by its ID
* @author Danaé Grosjean
* @param {string} value - NEED TO BE CHANGED - an ID to test the function
* @param {object} characterById - host the response of the get demand on the data base
* @returns {object} return the card of a character already in the database
*/

  async function getCharacterByIdAsync() {
    let value = "301bc33c-62fe-4060-8047-45ca196019da";
    const response = await axios.get(`https://character-database.becode.xyz/characters/${value}`);

    let characterById = response.data;
    return characterById;
  }

  let testId = await getCharacterByIdAsync();
  console.log(testId);

/** Fetch one of the characters in the database by its name
* @author Danaé Grosjean
* @param {string} value - NEED TO BE CHANGED - a name to test the function
* @param {array} characterByName - host the response of the get demand on the data base
* @returns {array} return the card of a character already in the database
*/

async function getCharacterByNameAsync() {
  let value = "Spiderman";
  const response = await axios.get(`https://character-database.becode.xyz/characters?name=${value}`);

  let characterByName = response.data;
  return characterByName;
}

let testName = await getCharacterByNameAsync();
console.log(testName);

/** Display all characters in the main html file
* @author Danaé Grosjean
* @param {string} value - NEED TO BE CHANGED - a name to test the function
* @returns {array} return in the DOM all the name, image and description of all the database characters, each in a different div
*/

function displayAllCharactersAsync () {

  for (let elem of AllCards) {
    let card = document.createElement('div');
    document.body.appendChild(card);

    let pic = document.createElement('img');
    card.appendChild(pic);
    pic.src = `data:image/gif;base64,${elem.image}`;

    let title = document.createElement('h2');
    title.textContent = elem.name;
    card.appendChild(title);

    let infoShort = document.createElement('p');
    card.appendChild(infoShort);
    infoShort.textContent = elem.shortDescription;

    let infoButton = document.createElement('a');
    card.appendChild(infoButton);
    infoButton.textContent = "More info";
    infoButton.href = `https://character-database.becode.xyz/characters?name=${elem.name}`;
  }
}

displayAllCharactersAsync();


