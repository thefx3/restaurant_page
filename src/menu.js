import nemImage from './images/entrees_1.jpeg'
import saladImage from './images/entrees_3.jpeg'
import saladShrimp from './images/entrees_4.jpg'


export function menu () {
    const menu_content = document.getElementById("content");
    content.innerHTML = "";


    const menu_container = document.createElement("div");
    menu_container.classList.add("menu-container");

    content.appendChild(menu_container);


    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu_container.appendChild(menu);


    const menu_title = document.createElement("div");
    menu_title.classList.add("menu-title");
    menu_title.textContent = "MENU";
    menu.appendChild(menu_title);
    

    const entries_items = document.createElement("div");
    entries_items.classList.add("entries-items");
    menu.appendChild(entries_items);

    // Create menu items
    function createMenuItem(text, imgSrc, imgAlt, imgClass) {
        const item = document.createElement("div");
        item.classList.add("menu-item");
    
        const itemText = document.createElement("div");
        itemText.classList.add("item-text");
        itemText.textContent = text;
    
        const itemImage = document.createElement("img");
        itemImage.src = imgSrc;
        itemImage.alt = imgAlt;
        itemImage.classList.add("item-image", imgClass);
    
        item.appendChild(itemImage);
        item.appendChild(itemText);
    
        return item;
    }


    entries_items.appendChild(
        createMenuItem("NEMS CHICKEN (2 pieces) 6.50€", nemImage, "NEMS", "image-nems")
    );
    
    entries_items.appendChild(
        createMenuItem("MEAT SALAD 6.90€", saladImage, "Salad", "image-salad")
    );

    entries_items.appendChild(
        createMenuItem("SHRIMP SALADE 6.50€", saladShrimp, "Salad", "image-shrimp")
    );


}