import axios from "axios";
const baseUrl = "http://localhost:3000"

function changePage(page) {
  const list_page = {
    home: document.getElementById("home-page"),
    detail: document.getElementById("detail-page"),
    login: document.getElementById("login-page"),
    register: document.getElementById("register-page"),
    cuisines: document.getElementById("cuisines-table"),
    categories: document.getElementById("categories-table"),
    add: document.getElementById("add-cuisine"),
    edit: document.getElementById("edit-cuisine")
  }

  for (const page in list_page) {
    list_page[page].classList.add("d-none")
  }

  switch (page) {
    case "home":
      list_page.home.classList.remove("d-none");
      break;
    case "detail":
      list_page.detail.classList.remove("d-none");
      break;
    case "cuisines":
      list_page.cuisines.classList.remove("d-none");
      break;
    case "categories":
      list_page.categories.classList.remove("d-none");
      break;
    case "add":
      list_page.add.classList.remove("d-none");
      break;
    case "edit":
      list_page.edit.classList.remove("d-none");
      break;
    case "login":
      list_page.login.classList.remove("d-none");
      break;
    case "register":
      list_page.register.classList.remove("d-none");
      break;

    // case "image":
    //   list_page.image.classList.remove("d-none");
    // break;
    default:
      break;
  }
}

async function fetchCuisines() {
  //ambil data di dlm server lalu tampilkan dlm table yg ada
  // 1. AMBIL DATA
  try {
    let { data } = await axios({
      method: "GET",
      url: baseUrl + "/cuisines"
    });

    // 2. CREATE ELEMENT DARI DATA KITA
    const elements = data.map(el => {
      return `<tr>
      <td class="pt-3-half" style="width: 20%; height: 20%;"><img class="card-img-top"
          src="${el.imgUrl}">
      </td>
      <td class="pt-3-half">${el.name}</td>
      <td class="pt-3-half">${el.description}</td>
      <td class="pt-3-half">${el.price}</td>
      <td class="pt-3-half">${el.User.username}</td>
      <td class="pt-3-half">${el.Category.name}</td>
      <td>
        <span class="table-edit"><button type="button" class="btn btn-outline-dark flex-shrink-0">
            Edit
          </button></span>
        <span class="table-remove"><button data-id="${el.id}" type="button" class="btn btn-danger delete-button flex-shrink-0">
            Remove
          </button></span>
      </td>
    </tr>`
    })

    // 3. INJECT DATA KE DLM TABLE
    const cuisine_table = document.querySelector("#cuisines-table tbody")
    cuisine_table.innerHTML = elements.join("")

    // 4. KASIH EVENT LISTENER KE SETIAP TOMBOL DELETE KITA
   document.querySelectorAll(".delete-button").forEach(el => {
      el.addEventListener("click", handleDelete)
    })

  } catch (error) {
    console.log(error)
  }
}

async function homePage() {
  try {
    let { data } = await axios({
      method: "GET",
      url: baseUrl + "/pub/cuisines"
    });

    console.log(data)

    const cuisines = data.map(el => {
      return `
            <div class="col">
              <div class="card text-center">
              <img class="card-img-top"
              src=${el.imageUrl}
              alt="${el.name}">
            <div class="card-body">
              <h5 class="card-title text-center"> ${el.name}
                  </h5>
                  <button data-id="${el.id}" id="read-more-button" type="button" class="btn btn-outline-dark flex-shrink-0">
                      Read More
                  </button>
                </div>
              </div>
        </div>`
    })

    const cuisine_card = document.querySelector("#home-page #cuisines-card")
    cuisine_card.innerHTML = cuisines.join("")

  } catch (error) {
    console.log(error)
  }
}

// async function handleSubmitAddCuisine(e) {
//   e.preventDefault()
//   const name = document.getElementById("add-name")
//   const price = document.getElementById("add-price")
//   const imageUrl = document.getElementById("add-imageUrl")
//   const description = document.getElementById("add-description")
//   const authorId = document.getElementById("add-authorId")
//   const categoryId = document.getElementById("add-categoryId")
// }

async function handleDelete(event){
  // AMBIL ID DARI data-id yang diselipkan di tombol delete
  let cuisineId = event.target.getAttribute("data-id")  // event terjadi di elemen button, ambil atributnya

  try {
    // AXIOS CALL UTK HAPUS DATA
    await axios({
      method: "DELETE",
      url: baseUrl + "/cuisines/" + cuisineId
    });

    // FETCH DATA MOVIES TERBARU UTK UPDATE TAMPILAN
    fetchCuisines()  

  } catch (error) {
    console.log(error)
  }
}

function init() {

  // HIDE HALAMAN YG BELUM PERLU DITAMPILKAN
  changePage("home");

  // homePage()

  document.getElementById("read-more-button").addEventListener("click", function () { 
    changePage("detail")
  })

  document.getElementById("register-button").addEventListener("click", function () { 
    changePage("register")
  })

  document.getElementById("logIn-button").addEventListener("click", function () { 
    changePage("login")
  })

  // ADD EVENT LISTENER KE TOMBOL YG FIX MUNCUL
  document.getElementById("add-cuisine-button").addEventListener("click", function () {  // add di table page
    changePage("add")
  })

  document.getElementById("cancel-add-cuisine").addEventListener("click", function () {  // cancel di ad form
    changePage("cuisines")
  })

  document.getElementById("add-cuisine-form").addEventListener("submit",
    handleSubmitAddCuisine)

  // AMBIL DATA CUISINE
  // fetchCuisines();
}

init()