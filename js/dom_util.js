export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const REMOVE_BUTTON_PREFIX = 'remove-button-';

const sortStadiumsCheckBox = document.getElementById("sort_stadiums");
const itemsContainer = document.getElementById("items_container");
const nameInput = document.getElementById("name_input");
const numberInput = document.getElementById("number_input");
const powerInput = document.getElementById("power_input");
const pagination = document.getElementById("pagination");

let itemsLimit = 8;
let itemsPage = 0;
let pagesCount = 1;
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
const paginationTemplate = (pageNumer) => `<li id="page-${pageNumer}" class="page-item"><a class="page-link" href="#${pageNumer}">${pageNumer + 1}</a></li>`;

export const addItemToPage = ({ id, name, number, power}, onRemoveItem,onEditItem ) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, number, power})
    );

    const removeButton = document.getElementById(`${REMOVE_BUTTON_PREFIX}${id}`);
    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    removeButton.addEventListener("click", () => {
        onRemoveItem(id);
    });
    editButton.addEventListener("click", () => {
    onEditItem(id);
  });
};


export const renderItemsList = (items, onRemoveItem,onEditItem) => {
  itemsContainer.innerHTML = "";
  let final_items = [...items].reverse();
  if (sortStadiumsCheckBox.checked) {
    final_items.sort((a, b) => a.power - b.power);
  }
  for (let i = itemsPage * itemsLimit + itemsLimit; i > itemsPage * itemsLimit; i--) {
    if (i > final_items.length && final_items.length > itemsPage * itemsLimit) {
      i = final_items.length;
    }
    try {
      addItemToPage(final_items[i - 1], onRemoveItem, onEditItem);
    } catch (error) {
      if (i === itemsPage * itemsLimit + itemsLimit) {
        itemsContainer.innerHTML = `<h1>No Stadiums</h1>`;
      }
      break;
    }
  }

  renderPagination(items, onRemoveItem, onEditItem);
};

export const setPage = (page) => {
  itemsPage = page;
}

export const changePage = (page) => {
  if (page > 0 && itemsPage < pagesCount - 1) {
    itemsPage += 1;
  } else if (page < 0 && itemsPage > 0) {
    itemsPage -= 1;
  }
  console.log(itemsPage);
}

const renderPagination = (items, onRemoveItem, onEditItem) => {
  pagination.innerHTML = "";

  pagesCount = Math.ceil(items.length / itemsLimit);

  for (let page = 0; page < pagesCount; page++) {
    pagination.insertAdjacentHTML("beforeend", paginationTemplate(page));

    const pageBtn = document.getElementById(`page-${page}`);

    pageBtn.addEventListener("click", () => {
      itemsPage = page;
      renderItemsList(items, onRemoveItem, onEditItem);
    })

    if (page === itemsPage) {
      pageBtn.classList.add("active");
    }
  }
}


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

export const fillInputValues = ({ name, number, power }) => {
  nameInput.value = name;
  numberInput.value = number;
  powerInput.value = power;
};

