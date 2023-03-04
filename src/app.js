let now = new Date();

let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

let h5 = document.querySelector("h5");
h5.innerHTML = `${day} ${hour}:${minute} PST`;

function showTemp(response) {
	document.querySelector("#city-search").innerHTML = response.data.name;
	let actualTemp = Math.round((response.data.main.temp * 9) / 5 + 32);
	document.querySelector("#temperature").innerHTML = `${actualTemp}°F`;
}
function citySearch(event) {
	event.preventDefault();

	let city = document.querySelector("#search-input").value;
	let unit = "metric";
	let endPoint = "https://api.openweathermap.org/data/2.5/weather";
	let apiKey = "d55c48b1d5bef2cd3c926fefba853e0e";
	let apiUrl = `${endPoint}?q=${city}&appid=${apiKey}&units=${unit}`;
	axios.get(`${apiUrl}`).then(showTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);
