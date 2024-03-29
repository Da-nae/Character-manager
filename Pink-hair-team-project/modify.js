// Import files :
import './style.css'
import axios from 'axios'

// Submit button : 
let submit = document.getElementById('submit');

// read the image file : 
let image = document.querySelector("input[type=file]").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        image = reader.result.replace('data:', '').replace(/^.+,/, '');
    };
    reader.readAsDataURL(file)
});

// Add the content of the selected character :
async function displayCharacterAsync() {

    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('id');

    const response = await axios.get(`https://character-database.becode.xyz/characters/${value}`);

    let singleCharacter = response.data;

    let characterName = document.querySelector('#characterName');
    let shortDescription = document.querySelector('#shortDescription');
    let Description = document.querySelector('#Description');

    characterName.value = singleCharacter.name;
    shortDescription.value = singleCharacter.shortDescription;
    Description.value = singleCharacter.description;
}

displayCharacterAsync();

// Update the data :
async function inputCharacterAsync() {
    
    if(document.querySelector("input[type=file]").files.length === 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const value = urlParams.get('id');

        const resp = await axios.get(`https://character-database.becode.xyz/characters/${value}`);
        let singleCharacter = resp.data;

        let characterName = document.querySelector('#characterName').value;
        let shortDescription = document.querySelector('#shortDescription').value;
        let Description = document.querySelector('#Description').value;
        
            let updatedChar = { 
                name: characterName, 
                shortDescription: shortDescription,
                description: Description,
                image: singleCharacter.image
            };
        
            let response = await axios.put(`https://character-database.becode.xyz/characters/${value}`, updatedChar);

            let data = response.data;
            console.log(data);
            console.log("your if works, Dan");
            window.location.replace("./index.html");
            
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        const value = urlParams.get('id');
        let characterName = document.querySelector('#characterName').value;
        let shortDescription = document.querySelector('#shortDescription').value;
        let Description = document.querySelector('#Description').value;
        
            let updatedChar = { 
                name: characterName, 
                shortDescription: shortDescription,
                description: Description,
                image: image
            };
        
            let response = await axios.put(`https://character-database.becode.xyz/characters/${value}`, updatedChar);

            let data = response.data;
            console.log(data);
            window.location.replace("./index.html");
    }
}

// Function to submit the data : 
submit.addEventListener("click", async() => {

    const result = confirm("Are you ok with the modification you've done?");

        if (result) {
                alert("Congrats ! It's modified !");
                await inputCharacterAsync();
        }
});