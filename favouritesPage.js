const container = document.getElementById('favcontainer');

function renderFavourites() {
    if (!container) {
        return;
    }

    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    container.innerHTML = '';

    if (favourites.length === 0) {
        container.innerHTML = '<p class="empty">No favourites</p>';
        return;
    }

    favourites.forEach((item, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'favcard';

        const img = document.createElement('img');
        img.src = item.image;
        

        const title = document.createElement('h3');
        title.textContent = item.title;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'removeButton';
        removeButton.addEventListener('click', () => {
            favourites.splice(index, 1);
            localStorage.setItem('favourites', JSON.stringify(favourites));
            renderFavourites();
        });

        wrapper.appendChild(img);
        wrapper.appendChild(removeButton);
        container.appendChild(wrapper);
    });
}

document.addEventListener('DOMContentLoaded', renderFavourites);