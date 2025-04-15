import nemImage from './images/entrees_1.jpeg'
import saladImage from './images/entrees_4.jpg'


export function menu () {
    const menu_content = document.getElementById("content");
    content.innerHTML = "";


    const menu_container = document.createElement("div");
    menu_container.classList.add("menu-container");

    content.appendChild(menu_container);

    const navigation = document.createElement("div");
    navigation.classList.add("navigation");
    menu_container.appendChild(navigation);


    const entries = document.createElement("a");
    entries.classList.add("entries");
    entries.textContent = "ENTRÉES";
    navigation.appendChild(entries);
    const main_courses = document.createElement("a");
    main_courses.classList.add("main-courses");
    main_courses.textContent = "PLATS PRINCIPAUX";
    navigation.appendChild(main_courses);
    const desserts = document.createElement("a");
    desserts.classList.add("desserts");
    desserts.textContent = "DESSERTS";
    navigation.appendChild(desserts);
    const drinks = document.createElement("a");
    drinks.classList.add("drinks");
    drinks.textContent = "BOISSONS";
    navigation.appendChild(drinks);
    const specials = document.createElement("a");
    specials.classList.add("specials");
    specials.textContent = "SPECIALITÉS";
    navigation.appendChild(specials);


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

    // 1 BOX ITEM 

    const box_items = document.createElement("div");
    box_items.classList.add("box-items");
    entries_items.appendChild(box_items);

    const item1 = document.createElement("div");
    item1.classList.add("item");
    item1.textContent = "NEMS CHICKEN (2 pieces) 6.50€";
    box_items.appendChild(item1);


    const image_nems = document.createElement("img");
    image_nems.src = nemImage;
    image_nems.alt = "NEMS";
    image_nems.classList.add("image-nems");
    box_items.appendChild(image_nems);

    // END

    // 1 BOX ITEM 

    const salad_items = document.createElement("div");
    salad_items.classList.add("box-items");
    entries_items.appendChild(salad_items);

    const item2 = document.createElement("div");
    item2.classList.add("item");
    item2.textContent = "MEAT SALAD 6.90€";
    salad_items.appendChild(item2);


    const image_salad = document.createElement("img");
    image_salad.src = saladImage;
    image_salad.alt = "Salad";
    image_salad.classList.add("image-salad");
    salad_items.appendChild(image_salad);

    // END



}