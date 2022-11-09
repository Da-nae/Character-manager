// Import files :

import axios from 'axios'

/** Fetch one of the characters in the database by its name
* @author Danaé Grosjean
* @param {string} value - NEED TO BE CHANGED - a name to test the function
* @param {array} characterByName - host the response of the get demand on the data base
* @returns {array} return the card of a character already in the database
*/

async function getCharacterByIdAsync() {
    let value = "301bc33c-62fe-4060-8047-45ca196019da";
    const response = await axios.get(`https://character-database.becode.xyz/characters/${value}`);

    let characterById = response.data;
    return characterById;
}

let singleCharacter = await getCharacterByIdAsync();
console.log(singleCharacter);

/** Display a single characters in the main html file
* @author Danaé Grosjean
* @param {string} value - NEED TO BE CHANGED - a name to test the function
* @returns {array} return in the DOM all the name, image and description of all the database characters, each in a different div
*/

function displayCharacterAsync () {

        let card = document.createElement('div');
        document.body.appendChild(card);
    
        let pic = document.createElement('img');
        card.appendChild(pic);
        pic.src = `data:image/gif;base64,${singleCharacter.image}`;
    
        let title = document.createElement('h2');
        title.textContent = singleCharacter.name;
        card.appendChild(title);
    
        let infoLong = document.createElement('p');
        card.appendChild(infoLong);
        infoLong.textContent = singleCharacter.description;

}

displayCharacterAsync();