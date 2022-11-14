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
                await axios.delete(`https://character-database.becode.xyz/characters/${singleCharacter.id}`);
                alert('Character has been successfully deleted'); 
                window.location.replace("http://localhost:5174/");
            }
        }
    });

//  Adding the delete button on the character card
    let modButton = document.createElement('a');
    card.appendChild(modButton);
    modButton.textContent = "Modify";
    modButton.classList.add("character_buttons");
    modButton.classList.add("modify_button");
    modButton.href = `../modify.html?id=${value}`;
}

displayCharacterAsync();