export const catalog = (harvestArray) => {
    const contentElement = document.querySelector(".container")
for (const food of harvestArray) {
contentElement.innerHTML += `<section class="plant">${food.type}</section>`
}

}