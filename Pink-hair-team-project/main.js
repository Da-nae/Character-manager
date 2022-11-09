import './style.css'
const axios = import('axios').default;


axios.get('https://static.becode.xyz/character-database/characters-database.postman_collection.json')
  .then(response => {
    console.log(response.data);
  })