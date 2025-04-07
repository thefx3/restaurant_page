
import restaurantImage from './images/restaurant_home.jpg'

export function home () {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Welcome to Hanoi Vietnam";
    container.appendChild(title);

    const container2 = document.createElement("div");
    container2.classList.add("container2");
    content.appendChild(container2);

    const address = document.createElement("div");
    address.classList.add("address");
    address.textContent = "11 Street Asia, 123000 NewCity \n06 76 76 67 76 \n\nOpen 6J/7 \n11:30-14:30 18:00-21:45 \nClosed on Sunday";
    container2.appendChild(address);

    const img = document.createElement("img");
    img.src = restaurantImage;
    img.alt = "Restaurant Image";
    img.classList.add("image-restaurant");

    container2.appendChild(img);

        



}