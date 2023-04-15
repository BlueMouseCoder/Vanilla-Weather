function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "46666120a55ab9218384642a2eff12cc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New-York&appid=${apiKey}&units=imperial`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
