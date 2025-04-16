import nemImage from './images/entrees_1.jpeg'
import saladImage from './images/entrees_3.jpeg'
import saladShrimp from './images/entrees_4.jpg'

import main1 from './images/main_1.jpg'
import main2 from './images/main_2.jpg'
import main3 from './images/main_3.jpg'

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
        createMenuItem("2 NEMS CHICKEN 6.50€", nemImage, "Nems", "image-nems")
    );
    
    entries_items.appendChild(
        createMenuItem("MEAT SALAD 6.90€", saladImage, "Salad", "image-salad")
    );

    entries_items.appendChild(
        createMenuItem("SHRIMP SALAD 6.50€", saladShrimp, "Salad", "image-shrimp")
    );


    const main_items = document.createElement("div");
    main_items.classList.add("main-items");
    menu.appendChild(main_items);

    main_items.appendChild(
        createMenuItem("BEEF PHO 9.50€", main1, "Pho", "image-pho")
    );
    main_items.appendChild(
        createMenuItem("BOBUN 9.50€", main2, "Bobun", "image-bobun")
    );  
    main_items.appendChild(
        createMenuItem("FRIED NOODLES 8.50€", main3, "Noodles", "image-noodles")
    );

}