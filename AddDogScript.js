const saveChangesButton = document.querySelector("#save-changes-button");
const modal = document.querySelector("#exampleModal");
const imageLinkInput = document.querySelector("#imageLink");
const nameInput = document.querySelector("#name");
const stateInput = document.querySelector("#state");
const cityInput = document.querySelector("#city");
const countryInput = document.querySelector("#country");

addButton.addEventListener("click", () => {
    modal.style.display = "block";
});

saveChangesButton.addEventListener("click", () => {

    modal.style.display = "none";

    const imageLink = imageLinkInput.value;
    const name = nameInput.value;
    const state = stateInput.value;
    const city = cityInput.value;
    const country = countryInput.value;

    if (!imageLink || !name || !state || !city || !country) {
        $("#myModal").modal("show");
        return;
    }

    const newImage = {
        src: imageLink,
        name: name,
        state: state,
        city: city,
        country: country
    };

    images.push(newImage);
    resetImageList();

    imageLinkInput.value = "";
    nameInput.value = "";
    stateInput.value = "";
    cityInput.value = "";
    countryInput.value = "";
});
