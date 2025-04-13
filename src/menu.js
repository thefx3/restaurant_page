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

}