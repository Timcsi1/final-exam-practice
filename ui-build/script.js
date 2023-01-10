const beers = {
    id: "beers",
    logo: "Best Beers",
    button: "details",
    cards: [
        {
            title: "Mango Bay",
            sub: "Mad Scientist Beer",
            text: "Pale Ale - American",
        },
        {
            title: "Távoli Galaxis",
            sub: "Rothbeer Brewery",
            text: "IPA - American",
        },
        {
            title: "Flying Rabbit AIPA",
            sub: "MONYO Brewing Co.",
            text: "IPA - American",
        },
        {
            title: "Liquid Cocaine",
            sub: "Mad Scientist Beer",
            text: "IPA - Imperial",
        },
        {
            title: "Organic Chocolate Stout",
            sub: "Samuel Smith Old Brewery",
            text: "Stout - English",
        },
        {
            title: "Bracia",
            sub: "Thornbridge Brewery",
            text: "Strong Ale - English",
        },
        {
            title: "Oatmeal Stout",
            sub: "Samuel Smith Old Brewery",
            text: "Stout - Oatmeal",
        },
        {
            title: "Black Tokyo Horizon",
            sub: "BrewDog",
            text: "Stout - American Imperial",
        },
        {
            title: "Vintage Ale",
            sub: "Fuller's",
            text: "Old Ale",
        },
        {
            title: "All the Leaves are Brown",
            sub: "Tempest Brewing Company",
            text: "Brown Ale - American",
        },
    ],
};
console.log(beers);

const rootElement = document.querySelector("#root");
rootElement.insertAdjacentHTML(
    "beforeend",
    `<header>
    <p>Best Beers</p>
    <span class="material-icons md-36">menu</span>
</header>
<div class="cards-container"></div>
`
);


const cardsContainer = document.querySelector(".cards-container");

beers.cards.forEach((e, index) => {
    cardsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
            <div class="number">${index}</div>
            <div class="title">${e.title}</div>
            <div class="sub">${e.sub}</div>
            <div class="text">${e.text}</div>
            <button>details</button>
        </div>
    `
    );
});
