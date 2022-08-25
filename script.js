const saveBtn = document.getElementById("button-el");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-el");
const saveTabBtn = document.getElementById("tab-el");
let myList = [];

//save a new link from input
saveBtn.addEventListener("click", () => {
     if (inputEl.value != "") {
          if (window.localStorage.getItem("myList") != null) {
               myList = JSON.parse(window.localStorage.getItem("myList"));
          }
          myList.push(inputEl.value);
          window.localStorage.setItem("myList", JSON.stringify(myList));
          renderList();
          inputEl.value = "";
     }

});

// save current tab link
saveTabBtn.addEventListener("click", () => {
     console.log(window.location.href);

     if (window.localStorage.getItem("myList") != null) {
          myList = JSON.parse(window.localStorage.getItem("myList"));
     }

     myList.push((window.location.href).toString());

     window.localStorage.setItem("myList", JSON.stringify(myList));

     console.log(localStorage.getItem("myList"));
     renderList();
});

// delete all the links
deleteBtn.addEventListener("dblclick", () => {
     if (myList.length !== 0) {
          localStorage.clear();
          myList = [];
          renderList();
     }

});


//render the list from localStorage
function renderList() {

     ulEl.innerHTML = null;
     let listItems = "";
     myList = JSON.parse(window.localStorage.getItem("myList"));
     if (myList.length != 0) {
          for (let i = 0; i < myList.length; i++) {
               listItems += `<div class='list-class'>
                              <li class="link-el">
                                   <a href="${myList[i]}" target='_blank'>${myList[i]}</a>
                              </li>
                         </div>`;
          }
     }
     ulEl.innerHTML = listItems;

}

