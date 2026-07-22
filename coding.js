// Sample data for legends
const legends = [
    {
        id: 1,
        name: "Chris Norton",
        description: "Maties Rugby Hooker (1991–2003), toured internationally and left a lasting legacy.",
        facts: [
            "Played for Oxford against Cambridge at Twickenham in front of 75,000 spectators.",
            "Won Club Championships against RAU in 2000.",
            "Known for grit, teamwork, and inclusivity in rugby."
        ],
        origin: "Stellenbosch, South Africa",
        image: Riley.jpg
    },
    {
        id: 2,
        name: "Riley Norton",
        description: "Current Maties Varsity Cup Squad member, continuing the Norton rugby legacy.",
        facts: [
            "Balances academics with high-performance rugby.",
            "Inspired by Pieter-Stef du Toit, World Player of the Year.",
            "Strong supporter of diversity and women’s rugby."
        ],
        origin: "Stellenbosch, South Africa",
        image: chris.jpg
    }
];

// DOM elements
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const resultsContainer = document.getElementById("resultsContainer");
const detailsContainer = document.getElementById("detailsContainer");
const favouritesContainer = document.getElementById("favouritesContainer");
const comparisonContainer = document.getElementById("comparisonContainer");
const printButton = document.getElementById("printButton");

let favourites = [];
let comparison = [];

// Search functionality
searchButton.addEventListener("click", () => {
    const query = searchBar.value.toLowerCase();
    resultsContainer.innerHTML = "";

    const filtered = legends.filter(legend =>
        legend.name.toLowerCase().includes(query)
    );

    filtered.forEach(legend => {
        const item = document.createElement("div");
        item.classList.add("resultItem");
        item.innerHTML = `
            <img src="${legend.image}" alt="${legend.name}" class="thumbnail">
            <h3>${legend.name}</h3>
            <p>${legend.description}</p>
            <button class="detailsBtn">View Details</button>
            <button class="favBtn">Add to Favourites</button>
            <button class="compareBtn">Compare</button>
        `;

        // Details button
        item.querySelector(".detailsBtn").addEventListener("click", () => {
            showDetails(legend);
        });

        // Favourites button
        item.querySelector(".favBtn").addEventListener("click", () => {
            addFavourite(legend);
        });

        // Compare button
        item.querySelector(".compareBtn").addEventListener("click", () => {
            addComparison(legend);
        });

        resultsContainer.appendChild(item);
    });
});

// Show details
function showDetails(legend) {
    detailsContainer.innerHTML = `
        <h3>${legend.name}</h3>
        <img src="${legend.image}" alt="${legend.name}" class="detailImg">
        <p><strong>Description:</strong> ${legend.description}</p>
        <ul>
            ${legend.facts.map(fact => `<li>${fact}</li>`).join("")}
        </ul>
        <p><strong>Origin:</strong> ${legend.origin}</p>
    `;
}

// Add to favourites
function addFavourite(legend) {
    if (!favourites.includes(legend)) {
        favourites.push(legend);
        renderFavourites();
    }
}

function renderFavourites() {
    favouritesContainer.innerHTML = "";
    favourites.forEach(fav => {
        const favItem = document.createElement("div");
        favItem.classList.add("favouriteItem");
        favItem.textContent = fav.name;
        favouritesContainer.appendChild(favItem);
    });
}

// Add to comparison
function addComparison(legend) {
    if (comparison.length < 2 && !comparison.includes(legend)) {
        comparison.push(legend);
    }
    if (comparison.length === 2) {
        renderComparison();
    }
}

function renderComparison() {
    comparisonContainer.innerHTML = "";
    comparison.forEach(comp => {
        const compItem = document.createElement("div");
        compItem.classList.add("comparisonItem");
        compItem.innerHTML = `
            <h3>${comp.name}</h3>
            <p>${comp.description}</p>
            <p><strong>Origin:</strong> ${comp.origin}</p>
        `;
        comparisonContainer.appendChild(compItem);
    });
}

// Print functionality
printButton.addEventListener("click", () => {
    window.print();
});
