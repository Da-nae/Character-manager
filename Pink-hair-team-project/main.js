// Import files :
import './style.css'
import axios from 'axios'

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
//   let addButton = document.createElement('a');
//   let article = document.querySelector('article');
//   article.appendChild(addButton);
//   addButton.href = `../input.html`;
//   addButton.classList.add("addition_button");
//   addButton.textContent = "+";
}

displayAllCharacters();
