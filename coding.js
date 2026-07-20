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
        image: "images/chris.jpg"
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
        image: "images/riley.jpg"
    }
];

// DOM elements
const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results-container");
const detailsContainer = document.getElementById("details-container");
const favouritesContainer = document.getElementById("favourites-container");
const comparisonContainer = document.getElementById("comparison-container");
const printButton = document.getElementById("print-button");

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
        item.classList.add("result-item");
        item.innerHTML = `
            <img src="${legend.image}" alt="${legend.name}" class="thumbnail">
            <h3>${legend.name}</h3>
            <p>${legend.description}</p>
            <button class="details-btn">View Details</button>
            <button class="fav-btn">Add to Favourites</button>
            <button class="compare-btn">Compare</button>
        `;

        // Details button
        item.querySelector(".details-btn").addEventListener("click", () => {
            showDetails(legend);
        });

        // Favourites button
        item.querySelector(".fav-btn").addEventListener("click", () => {
            addFavourite(legend);
        });

        // Compare button
        item.querySelector(".compare-btn").addEventListener("click", () => {
            addComparison(legend);
        });

        resultsContainer.appendChild(item);
    });
});

// Show details
function showDetails(legend) {
    detailsContainer.innerHTML = `
        <h3>${legend.name}</h3>
        <img src="${legend.image}" alt="${legend.name}" class="detail-img">
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
        favItem.classList.add("favourite-item");
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
        compItem.classList.add("comparison-item");
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
