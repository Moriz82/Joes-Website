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
    const option = document.createElement("a");
    option.value = country;
    option.text = country;
    option.classList.add("dropdown-item");
    countryDropdown.appendChild(option);
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
    const option = document.createElement("a");
    option.value = state;
    option.text = state;
    option.classList.add("dropdown-item");
    stateDropdown.appendChild(option);
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
    const option = document.createElement("a");
    option.value = city;
    option.text = city;
    option.classList.add("dropdown-item");
    cityDropdown.appendChild(option);
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

const dropdownSearch = document.querySelector('#dropdownSearch');
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownSearch.addEventListener('keyup', () => {
    const searchTerm = dropdownSearch.value.toLowerCase();
    dropdownItems.forEach((item) => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

function resetImageList() {
    list.innerHTML = "";
    images.forEach((image) => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = `image${image.id}`;
            list.appendChild(img);
        });
}
