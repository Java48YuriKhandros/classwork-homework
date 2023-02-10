const button = document.getElementById("button");
const input = document.getElementById("input");
const list = document.getElementById("list");

const addItem = () => {
  const skill = input.value.trim();
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(skill));
  list.appendChild(listItem);
  input.value = "";
};

button.addEventListener("click", () => {
  addItem();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

/* button.addEventListener("mouseover", () => {
  alert("Mouse over");
}); */
/* button.addEventListener("mouseout", () => {
    alert('Mouse over')
  }); */

input.addEventListener("focus", () => {
  console.log("focus");
});

input.addEventListener("blur", () => {
    console.log("blur");
  });
