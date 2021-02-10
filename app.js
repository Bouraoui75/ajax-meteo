function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

function main(){
   fetch('https://api.ipify.org?format=json')
   .then(resultat => resultat.json())
   .then(json => {
     const ip = json.ip;
       
     fetch('http://freegeoip.net/json/' + ip)
     .then(resultat => resultat.json())
     .then(json => {
         const ville = json.city;

         fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&appid=a56bebdc973c623464e7885da32d7c2d')
         .then(resultat => resultat.json())
         .then(json => {
             console.log(json);
         })
     })
   })



}

main()