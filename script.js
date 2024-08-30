document.addEventListener('DOMContentLoaded', () => {
    fetch('apps.json')
        .then(response => response.json())
        .then(data => displayApps(data))
        .catch(error => console.error('Error loading app data:', error));
});

function displayApps(apps) {
    const appList = document.getElementById('appList');

    apps.forEach(app => {
        if (!app.isEnabled) return;

        const appTile = document.createElement('div');
        appTile.classList.add('app-tile');

        const appName = document.createElement('h2');
        appName.textContent = app.name;
        appTile.appendChild(appName);

        const appDescription = document.createElement('p');
        appDescription.textContent = app.description;
        appTile.appendChild(appDescription);

        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');

        const openSamePageLink = document.createElement('a');
        openSamePageLink.classList.add('open-same');
        openSamePageLink.href = app.url;

        const openSameIcon = document.createElement('span');
        openSameIcon.classList.add('arrow');
        openSameIcon.textContent = '→'; // Right Arrow
        openSamePageLink.appendChild(openSameIcon);

        const openNewTabLink = document.createElement('a');
        openNewTabLink.classList.add('open-new');
        openNewTabLink.href = app.url;
        openNewTabLink.target = '_blank';

        const openNewIcon = document.createElement('span');
        openNewIcon.classList.add('arrow');
        openNewIcon.textContent = '↗'; // Diagonal Arrow
        openNewTabLink.appendChild(openNewIcon);

        buttonGroup.appendChild(openSamePageLink);
        buttonGroup.appendChild(openNewTabLink);

        appTile.appendChild(buttonGroup);
        appList.appendChild(appTile);
    });
}
