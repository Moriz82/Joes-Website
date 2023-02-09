const searchBar = (options, searchTerm) => {
    return options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

const updateDropdown = (images, selected) => {
    const updatedOptions = [];
    images.forEach((image) => {
        if (selected.every((value) => image[value[0]] === value[1])) {
            updatedOptions.push(image);
        }
    });
    return updatedOptions;
};

const getPossibleValues = (images, key) => {
    const possibleValues = new Set();
    images.forEach((image) => possibleValues.add(image[key]));
    return Array.from(possibleValues);
};

let selected = [];

const updateSelected = (key, value) => {
    selected = selected.filter((item) => item[0] !== key);
    selected.push([key, value]);
};

const updateImage = (images, selected) => {
    return updateDropdown(images, selected).map((image) => image.url);
};
