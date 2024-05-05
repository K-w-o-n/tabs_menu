const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const menuTabs = ["home", "about","menu","services","contact"];

const handleChange = (e) => {
    const clickedTagId = e.target.id;
    const clickedLiTag = document.getElementById(clickedTagId);
    const clickedLiTagOffSetWidth = clickedLiTag.offsetWidth;
    const clickedLiTagOffSetLeft = clickedLiTag.offsetLeft;
    sliderTag.style.width = clickedLiTagOffSetWidth + "px";
    sliderTag.style.transform = `translateX(${clickedLiTagOffSetLeft}px)`;

}

for (let i = 0; i < menuTabs.length; i++) {
    const liTag = document.createElement("li");
    liTag.append(menuTabs[i].toUpperCase())
    liTag.id = i;
    liTag.addEventListener("click", handleChange);
    ulTag.append(liTag);
    if(i === 0) {
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
    
}