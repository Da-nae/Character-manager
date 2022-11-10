// Import files :
import './style.css'
import axios from 'axios'

/** Fetch one of the characters in the database by its ID and display it in a single page
* @author Danaé Grosjean
* @returns {array} return in the DOM all the name, image and description of all the database characters, each in a different div
*/

async function displayCharacterAsync() {

    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('id');
    
    const response = await axios.get(`https://character-database.becode.xyz/characters/${value}`);

    let singleCharacter = response.data;

// Creation of the div to host the card
        let card = document.createElement('div');
        document.body.appendChild(card);
        card.classList.add("character");

// Adding the image of the character
        let pic = document.createElement('img');
        card.appendChild(pic);
        pic.src = `data:image/gif;base64,${singleCharacter.image}`;
        pic.classList.add("character_img");

// Adding the name of the character
        let title = document.createElement('h2');
        title.textContent = singleCharacter.name;
        card.appendChild(title);
        title.classList.add("character_name");

// Adding the small description of the character
        let infoLong = document.createElement('p');
        card.appendChild(infoLong);
        infoLong.textContent = singleCharacter.description;
        infoLong.classList.add("character_description");

// Adding the button more info on the character
        let infoButton = document.createElement('a');
        card.appendChild(infoButton);
        infoButton.textContent = "More info";
        infoButton.href = `https://character-database.becode.xyz/characters?name=${singleCharacter.name}`;
        infoButton.classList.add("character_buttons");

}

displayCharacterAsync();