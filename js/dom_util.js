export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const REMOVE_BUTTON_PREFIX = 'remove-button-';

const sortStadiumsCheckBox = document.getElementById("sort_stadiums");
const itemsContainer = document.getElementById("items_container");
const nameInput = document.getElementById("name_input");
const numberInput = document.getElementById("number_input");
const powerInput = document.getElementById("power_input");

const itemTemplate = ({ id, name,  number, power}) => `
<li id="${id}" class="card">
    <img src="./assets/Stadium.webp" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title">${name}</h4>
        <p>${number} people</p>
        <p>${power} power</p><br>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="btn btn-primary">Edit</button>
        <button id="${REMOVE_BUTTON_PREFIX}${id}"type="button" class="btn btn-danger">Remove</button>
    </div>
</li>`;

export const addItemToPage = ({ id, name, number, power}, onRemoveItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, number, power})
    );

    const removeButton = document.getElementById(`${REMOVE_BUTTON_PREFIX}${id}`);

    removeButton.addEventListener("click", () => {
        onRemoveItem(id);
    });
};

export const renderItemsList = (items, onRemoveItem) => {
  itemsContainer.innerHTML = "";

  if (sortStadiumsCheckBox.checked) {
    items.sort((a, b) => a.power - b.power);
  }

  for (const item of items) {
    addItemToPage(item, onRemoveItem);
  }
};

export const clearInputs = () => {
    nameInput.value = "";
    numberInput.value = 0;
    powerInput.value = 0;
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        number: numberInput.value,
        power: powerInput.value,
    };
};
