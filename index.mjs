const menu = document.querySelector(".menu");
const side = document.querySelector(".aside");
const backdrop = document.querySelector(".blank");
const header = document.querySelector(".header");
const addContent = document.querySelector(".upload");
const addContent_icon = document.querySelector(".create_content");
const apps = document.querySelector(".create");
const apps_icon = document.querySelector(".apps");
const notification = document.querySelector(".notification");
const notify = document.querySelector(".notify");

addContent.addEventListener("mouseover", add);
addContent.addEventListener("mouseout", remove);

apps.addEventListener("mouseover", showapps);
apps.addEventListener("mouseout", remove_apps);

notification.addEventListener("mouseover", add_notify);
notification.addEventListener("mouseout", remove_notify);

menu.addEventListener("click", addMenu);
function addMenu() {
  side.classList.toggle("click");
  const sideBars = document.querySelectorAll(".box");
  backdrop.classList.toggle("block");
  header.classList.toggle("hide");
  sideBars.forEach((item) => {
    item.classList.toggle("click");
  });
  const desc = document.querySelectorAll(".menuDisc");
  desc.forEach((item) => {
    item.classList.toggle("dent");
  });
}

function add() {
  addContent_icon.style.display = "block";
}
function remove() {
  addContent_icon.style.display = "none";
}

function showapps() {
  apps_icon.style.display = "block";
}
function remove_apps() {
  apps_icon.style.display = "none";
}

function add_notify() {
  notify.style.display = "block";
}
function remove_notify() {
  notify.style.display = "none";
}
