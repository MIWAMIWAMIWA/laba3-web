import {
    renderItemsList,
    getInputValues,
    clearInputs,
   fillInputValues
} from "./dom_util.js"

const countButton = document.getElementById("count_button");
const middlePowerText = document.getElementById("middle_power");
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");
const searchCancelButton = document.getElementById("search_cancel_button");
const submitButton = document.getElementById("submit_button");
const sortStadiumsCheckBox = document.getElementById("sort_stadiums");
const cancelButton = document.getElementById("cancel_button");
const homePageButton = document.getElementById("home_page_btn");
const createPageButton = document.getElementById("create_page_btn");
const homePage = document.getElementById("home_page");
const createPage = document.getElementById("create_page");
const searchForm = document.getElementById("search_form");
const createPageTitle = document.getElementById("create_page_title");

let editMode = false;
let editItemId = "";

let stadiums = [];
let temp_stadium=[];
const onRemoveItem = (id) => {
    stadiums = stadiums.filter(
        (stadium) => stadium.id !== id
    );
    refetchAllStadiums();
};

const refetchAllStadiums = () => {
  if(temp_stadium.length==0){
    renderItemsList(stadiums, onRemoveItem, onEditItem);
  }else{
    renderItemsList(temp_stadium, onRemoveItem,onEditItem);
  }
};

const onEditItem = (id) => {
  editMode = true;
  editItemId = id;

  const stadium = stadiums.find(({ id: insect_id }) => id == insect_id);

  showCreatePage();

  fillInputValues(stadium);
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
const showHomePage = () => {
  if (!homePageButton.classList.contains("selected_page")) {
    homePageButton.classList.add("selected_page");
  }
  if (createPageButton.classList.contains("selected_page")) {
    createPageButton.classList.remove("selected_page");
  }
  homePage.style.display = "flex";
  createPage.style.display = "none";
  searchForm.style.display = "flex";
};

const showCreatePage = () => {
  if (!createPageButton.classList.contains("selected_page")) {
    createPageButton.classList.add("selected_page");
  }
  if (homePageButton.classList.contains("selected_page")) {
    homePageButton.classList.remove("selected_page");
  }
  homePage.style.display = "none";
  createPage.style.display = "flex";
  searchForm.style.display = "none";
  cancelButton.style.display = "flex";

  if (editMode) {
    createPageTitle.innerText = "Edit Stadium";

  } else {
    createPageTitle.innerText = "Create Stadium";

  }
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { name, number, power } = getInputValues();
    if (!name ) {
    alert("the stadium must have name");
    return;
    }

    if (power < 0 || number < 0) {
    alert("the stadium cant have negative power of light or negative number of places");
    return;
    }

    clearInputs();

   if (editMode) {
    let stadium = stadiums.find(({ id: stadium_id }) => editItemId == stadium_id);
    stadium.name = name;
    stadium.power = power;
    stadium.number=number;

   } else {
    addItem({ name, power,number });
   }

   showHomePage();
   editMode = false;
   editItemId = "";

   refetchAllStadiums();
});

cancelButton.addEventListener("click", () => {
  editMode = false;
  editItemId = "";

  clearInputs();

  showHomePage();
});

searchButton.addEventListener("click", () => {
    const foundStadiums = stadiums.filter(
        (stadium) => stadium.name.toLowerCase().search(searchInput.value.toLowerCase()) !== -1
    );
    temp_stadium = foundStadiums;
   renderItemsList(foundStadiums, onRemoveItem,onEditItem);

});

searchCancelButton.addEventListener("click", () => {
    refetchAllStadiums();
    searchInput.value = "";
    temp_stadium=[];
});

sortStadiumsCheckBox.addEventListener("click", () => {
    refetchAllStadiums();
});

countButton.addEventListener("click", () => {
    if (stadiums.length === 0) {
        return;
    }
    let sum = 0;
    if (temp_stadium.length==0){
      for (const stadium of stadiums) {
        sum += Number(stadium.power);
      }
      middlePowerText.textContent = `${(sum / stadiums.length).toFixed(2)} power`;
      refetchAllStadiums();
    }else{
      for (const stadium of temp_stadium) {
        sum += Number(stadium.power);
      }
      middlePowerText.textContent = `${(sum / temp_stadium.length).toFixed(2)} power`;
      refetchAllStadiums();

    }

});


homePageButton.addEventListener("click", () => {
  showHomePage();
});

createPageButton.addEventListener("click", () => {
  showCreatePage();
});

refetchAllStadiums();
