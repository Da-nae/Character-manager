// Import files :
import './style.css'
import axios from 'axios'

let characterName = document.getElementById('chatacterName');
let image = document.getElementById('image');
let shortDescription = document.getElementById('shortDescription');

async function inputCharacterAsync() {
    const response = await axios.post('https://character-database.becode.xyz/characters');

    const AllCharacters = response.data;
    return AllCharacters;
}

inputCharacterAsync();