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

let countryOptions = [...new Set(images.map(item => item.country))];
let stateOptions = [...new Set(images.map(item => item.state))];
let cityOptions = [...new Set(images.map(item => item.city))];

let selectedCountry = "";
let selectedState = "";
let selectedCity = "";
let selectedImage = "";

function updateCountry(value) {
    selectedCountry = value;
    updateStateOptions();
    updateSelectedValues();
}

function updateState(value) {
    selectedState = value;
    updateCityOptions();
    updateSelectedValues();
}

function updateCity(value) {
    selectedCity = value;
    updateSelectedValues();
}

function updateStateOptions() {
    const newStateOptions = images
        .filter(item => item.country === selectedCountry)
        .map(item => item.state);
    stateOptions = [...new Set(newStateOptions)];
}

function updateCityOptions() {
    const newCityOptions = images
        .filter(item => item.state === selectedState)
        .map(item => item.city);
    cityOptions = [...new Set(newCityOptions)];
}

function updateSelectedValues() {
    const selectedImageObject = images.find(
        item =>
            item.country === selectedCountry &&
            item.state === selectedState &&
            item.city === selectedCity
    );
    selectedImage = selectedImageObject ? selectedImageObject.image : "";
}

