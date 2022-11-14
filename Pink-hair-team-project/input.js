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

// function to add the data in the database : 
async function inputCharacterAsync() {

    let characterName = document.querySelector('#characterName').value;
    let shortDescription = document.querySelector('#shortDescription').value;
    let Description = document.querySelector('#Description').value;
    
        let newChar = { 
            name: characterName, 
            shortDescription: shortDescription,
            description: Description,
            image: image
        };
    
        let response = await axios.post('https://character-database.becode.xyz/characters', newChar);
    
        let data = response.data;
        console.log(data);
}

// Function to submit the data : 
submit.addEventListener("click", async() => {

    const result = confirm("Is your character ready to be added to the database?");

        if (result) {
            if(characterName.length == 0 || shortDescription.length == 0 || Description.length == 0 || document.querySelector("input[type=file]").files.length == 0) {
                alert("You let something empty... try again !")
            } else {
                alert("Congrats ! It's added !");
                await inputCharacterAsync();
                window.location.replace("./index.html");
            }
        }
});