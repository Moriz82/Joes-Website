const images = [
    {
        src: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg",
        name: "Fluffy",
        country: "USA",
        state: "Illinois",
        city: "Chicago"
    },
    {
        src: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg",
        name: "Harry",
        country: "USA",
        state: "Texas",
        city: "Cedar Park"
    } ,
    {
        src: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
        name: "Garry",
        country: "USA",
        state: "New York",
        city: "New York"
    }
];

const listContainer = document.querySelector('.scrollable-list');

for (const image of images) {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.textContent =
        "Name: " + image.name + "\n " +
        "Country:" + image.country + "\n " +
        "State:" + image.state + "\n " +
        "City:" + image.city;
    listContainer.appendChild(imgElement);
}

const searchInput = document.getElementById("search");
const addButton = document.getElementById("add-button");
const list = document.querySelector(".scrollable-list");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    list.innerHTML = "";
    images
        .filter((image) => image.name.toLowerCase().includes(searchTerm))
        .forEach((image) => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = `image${image.id}`;
            list.appendChild(img);
        });
});


const countryDropdown = document.getElementById("country-dropdown");
const uniqueCountries = [];

images.forEach(function(image) {
    if (!uniqueCountries.includes(image.country)) {
        uniqueCountries.push(image.country);
    }
});

uniqueCountries.sort().forEach(function(country) {
    const option = document.createElement("option");
    option.value = country;
    option.text = country;
    countryDropdown.add(option);
});

countryDropdown.addEventListener("change", function() {
    const selectedOption = countryDropdown.value.toLowerCase();
    list.innerHTML = "";
    images
        .filter((image) => image.country.toLowerCase().includes(selectedOption))
        .forEach((image) => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = `image${image.id}`;
            list.appendChild(img);
        });
});


const stateDropdown = document.getElementById("state-dropdown");
const uniqueStates = [];

images.forEach(function(image) {
    if (!uniqueStates.includes(image.state)) {
        uniqueStates.push(image.state);
    }
});

uniqueStates.sort().forEach(function(state) {
    const option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateDropdown.add(option);
});

stateDropdown.addEventListener("change", function() {
    const selectedOption = stateDropdown.value.toLowerCase();
    list.innerHTML = "";
    images
        .filter((image) => image.state.toLowerCase().includes(selectedOption))
        .forEach((image) => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = `image${image.id}`;
            list.appendChild(img);
        });
});


const cityDropdown = document.getElementById("city-dropdown");
const uniqueCities = [];

images.forEach(function(image) {
    if (!uniqueCities.includes(image.city)) {
        uniqueCities.push(image.city);
    }
});

uniqueCities.sort().forEach(function(city) {
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    cityDropdown.add(option);
});

cityDropdown.addEventListener("change", function() {
    const selectedOption = cityDropdown.value.toLowerCase();
    list.innerHTML = "";
    images
        .filter((image) => image.city.toLowerCase().includes(selectedOption))
        .forEach((image) => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = `image${image.id}`;
            list.appendChild(img);
        });
});



addButton.addEventListener("click", function () {
    // Add image code here
});