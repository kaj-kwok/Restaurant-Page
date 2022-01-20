function newMenuItem(name, description, Price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu_list_item");
    const itemName = document.createElement("h3");
    itemName.classList.add("menu__item")
    itemName.textContent = name;
    const itemDesc = document.createElement("p")
    itemDesc.classList.add("menu__desc")
    itemDesc.textContent = description
    const itemPrice = document.createElement("div")
    itemPrice.classList.add("menu__price")
    itemPrice.innerHTML = Price

    menuItem.appendChild(itemName)
    menuItem.appendChild(itemPrice)
    itemName.appendChild(itemDesc)

    return menuItem
}

const currentMenu = [
    {
        name: "Rib-Eye",
        description: "Steak and more Steak",
        Price: "$40",

    },
    {
        name: "New York Strip",
        description: "Steak and more Steak",
        Price: "$30",
    },
    {
        name: "Pepper Steak",
        description: "Steak and more Steak",
        Price: "$35",
    },
    {
        name: "Lobster",
        description: "Lobster with Lobster on top of Lobster",
        Price: "$50",
    },
    {
        name: "Pan Fried Salmon",
        description: "Salmon with Salmon on top of Salmon",
        Price: "$35",
    },
]

function menu_wrapper() {
    const menucontainer = document.createElement("div")
    menucontainer.classList.add("menu__container")
    currentMenu.forEach((item) => {
        const menuIte = newMenuItem(item.name, item.description, item.Price)
        menucontainer.appendChild(menuIte)
    })
    return menucontainer;
}

export default menu_wrapper