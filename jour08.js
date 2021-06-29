var axios = require('axios');
 
// 01 - Countries
 
axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
  
   // console.log(res);
 
   const data = res.data.map(function(name){
       return name.name;
      
   })
 
   console.log(data);
});
 
// ## 02 - Chuck Norris
 
 
function getFacts() {
   axios.get("https://api.chucknorris.io/jokes/random").then(function (res) {
       let data = res.data;
       console.log(data.value);
   })
}
getFacts();
 
 
// ## 03 - Pokemon
 
 
function catchPokemon() {
   axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(function (res){
 
       let data = res.data;
       console.log(data.id);
       console.log(data.name);
 
   });
};
 
catchPokemon();
