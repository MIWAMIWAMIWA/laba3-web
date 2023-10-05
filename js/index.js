import {
    renderItemsList,
    getInputValues,
    clearInputs,
} from "./dom_util.js"

const countButton = document.getElementById("count_button");
const middlePowerText = document.getElementById("middle_power");
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");
const searchCancelButton = document.getElementById("search_cancel_button");
const submitButton = document.getElementById("submit_button");
const sortStadiumsCheckBox = document.getElementById("sort_stadiums");

let stadiums = [];

const onRemoveItem = (id) => {
    stadiums = stadiums.filter(
        (stadium) => stadium.id !== id
    );
    refetchAllStadiums();
};

const refetchAllStadiums = () => {
    renderItemsList(stadiums, onRemoveItem);
};

const addItem = ({ name, number, power}) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        name,
        number,
        power,
    };

    stadiums.push(newItem);

    refetchAllStadiums();
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { name, number, power } = getInputValues();

    clearInputs();

    addItem({ name, number, power })
    refetchAllStadiums();
});

searchButton.addEventListener("click", () => {
    const foundStadiums = stadiums.filter(
        (stadium) => stadium.name.search(searchInput.value) !== -1
    );

    renderItemsList(foundStadiums, onRemoveItem);
});

searchCancelButton.addEventListener("click", () => {
    refetchAllStadiums();

    searchInput.value = "";
});

sortStadiumsCheckBox.addEventListener("click", () => {
    refetchAllStadiums();
});

countButton.addEventListener("click", () => {
    if (stadiums.length === 0) {
        return;
    }

    let sum = 0;

    for (const stadium of stadiums) {
        sum += Number(stadium.power);
    }


    middlePowerText.textContent = `${(sum / stadiums.length).toFixed(2)} power`;
   refetchAllStadiums();
})

refetchAllStadiums();
