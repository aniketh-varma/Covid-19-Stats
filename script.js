var search = document.querySelector(".search");
var mainScreen = document.querySelector(".search-area");
var countryStats = document.querySelector(".country-stats");
var countryName = document.querySelector(".name");
var totalCases = document.querySelector(".totalCases");
var casesToday = document.querySelector(".casesToday");
var totalDeaths = document.querySelector(".totalDeaths");
var deathsToday = document.querySelector(".deathsToday");
var totalTests = document.querySelector(".totalTests");
var totalRecovered = document.querySelector(".totalRecovered");
var recoveredToday = document.querySelector(".recoveredToday");
var testsPerMillion = document.querySelector(".testsPerMillion");
const image = document.createElement("img");

document.addEventListener("keydown", function (e) {
  //   searchval = "India";
  if(e.key=="Enter"){
    var searchval = document.querySelector(".search-box").value;
  
  mainScreen.classList.add("hidden");
  countryStats.classList.remove("hidden");

  fetch(`https://corona.lmao.ninja/v2/countries/${searchval}?yesterday=true`)
    .then((res) => res.json())
    .then(function (data) {
      image.src = `https://disease.sh/assets/img/flags/${data[
        "country"
      ].charAt(0).toLowerCase()}${data["country"].charAt(1).toLowerCase()}.png`;
      document.querySelector(".flag").appendChild(image); 
  
      countryName.textContent = `${data["country"]}`;
      // fetch(data["flag"])
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));
      totalCases.textContent = `${data["cases"].toLocaleString()}`;
      casesToday.textContent = `${data["todayCases"].toLocaleString()}`;
      totalDeaths.textContent = `${data["deaths"].toLocaleString()}`;
      deathsToday.textContent = `${data["todayDeaths"].toLocaleString()}`;
      totalTests.textContent = `${data["tests"].toLocaleString()}`;
      totalRecovered.textContent = `${data["recovered"].toLocaleString()}`;
      recoveredToday.textContent = `${data["todayRecovered"].toLocaleString()}`;
      testsPerMillion.textContent = `${data[
        "testsPerOneMillion"
      ].toLocaleString()}`;
      
      
    });
  }
 
  
});
