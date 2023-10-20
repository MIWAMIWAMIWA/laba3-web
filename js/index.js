import {
    renderItemsList,
    getInputValues,
    clearInputs,
  fillInputValues,
  setPage,
  changePage
} from "./dom_util.js"
import {
  get_Stadiums,
  post_Stadiums,
  put_Stadiums,
  delete_Stadium
} from "./api.js"

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
const prevPage = document.getElementById("prev_page");
const nextPage = document.getElementById("next_page");
let editMode = false;
let editItemId = "";

let stadiums = [];
const onRemoveItem = async (id) => {
  await delete_Stadium(id);
  refetchAllStadiums();
  showHomePage();
  setPage(0);
  renderItemsList(stadiums, onRemoveItem, onEditItem);
};

const refetchAllStadiums  = async () => {

  const allStadiums = await get_Stadiums();

  stadiums = allStadiums;

  setPage(0);

  renderItemsList(stadiums, onRemoveItem, onEditItem);
};

const onEditItem = (id) => {
  editMode = true;
  editItemId = id;

  const stadium = stadiums.find(({ id: stadium_id }) => id == stadium_id);

  showCreatePage();

  fillInputValues(stadium);
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

submitButton.addEventListener("click", async(event) => {
    event.preventDefault();

    const { name, number, power } = getInputValues();
    if (!name ) {
    alert("the stadium must have name");
    return;
    }

    if (power < 1 || number < 1) {
    alert("the stadium cant have negative power of light or negative number of places");
    return;
    }

    clearInputs();

   if (editMode) {
     const resp_stadiums = await put_Stadiums(editItemId,{
       editItemId,
       name,
       number,
       power
     });
     stadiums = resp_stadiums;
   } else {
     const temp_id = uuid.v1();
     const resp_stadiums = await post_Stadiums({
       temp_id,
       name,
       number,
       power
     });
     stadiums = resp_stadiums;
   }


   editMode = false;
   editItemId = "";
   showHomePage();
   setPage(0);
   renderItemsList(stadiums, onRemoveItem, onEditItem);
});

cancelButton.addEventListener("click", () => {
  editMode = false;
  editItemId = "";

  clearInputs();

  showHomePage();
});

searchButton.addEventListener("click", () => {
    stadiums = stadiums.filter(
        (stadium) => stadium.name.toLowerCase().search(searchInput.value.toLowerCase()) !== -1
    );
  setPage(0);

  renderItemsList(stadiums, onRemoveItem, onEditItem);

});

searchCancelButton.addEventListener("click", () => {
    refetchAllStadiums();
    searchInput.value = "";
});

sortStadiumsCheckBox.addEventListener("click", () => {
  renderItemsList(stadiums, onRemoveItem, onEditItem);
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


});
prevPage.addEventListener("click", () => {
  changePage(-1);

  renderItemsList(stadiums, onRemoveItem, onEditItem);
});

nextPage.addEventListener("click", () => {
  changePage(1);

  renderItemsList(stadiums, onRemoveItem, onEditItem);
});

homePageButton.addEventListener("click", () => {
  showHomePage();
});

createPageButton.addEventListener("click", () => {
  showCreatePage();
});

refetchAllStadiums();
