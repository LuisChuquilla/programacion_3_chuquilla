document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector("#titulo");
    console.log("Título:", titulo);

    const notas = document.getElementsByClassName("nota");
    console.log("Notas:", notas);
    
    const items = document.querySelectorAll("li");
    console.log("Items:", items);

    const primerItem = document.querySelector(".item");
    console.log("Primer item:", primerItem);

    const todosLosItems = document.querySelectorAll(".item");
    console.log("Todos los items:", todosLosItems);

    Array.from(todosLosItems).forEach(item => {
        console.log("Item:", item);
    });
});