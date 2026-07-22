function getFavourites() {
    return JSON.parse(localStorage.getItem('favourites')) || [];
}

function saveFavourites(items) {
    localStorage.setItem('favourites', JSON.stringify(items));
}

function addFavourite(button) {
    const favouriteItem = {
        image: button.dataset.image
    };

    const favourites = getFavourites();
    favourites.push(favouriteItem);
    saveFavourites(favourites);

}

document.addEventListener('click', (event) => {
    const button = event.target.closest('.favButton');

    if (!button) {
        return;
    }

    event.preventDefault();
    addFavourite(button);
});