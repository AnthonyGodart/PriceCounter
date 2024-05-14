document.getElementById('calc-btn').addEventListener('click', function() {
    // Récupération des valeurs des champs de saisie
    let tyreBuyPriceInput = document.getElementById('tyre-buy-price');
    let tyreMarginInput = document.getElementById('tyre-margin');
    let tyreBFInput = document.getElementById('tyre-BF');

    // Vérification si les champs sont vides
    if (tyreBuyPriceInput.value === '' || tyreMarginInput.value === '' || tyreBFInput.value === '') {
        alert('Veuillez remplir tous les champs.');
        return; // Arrête l'exécution de la fonction si un champ est vide
    }

    // Conversion des valeurs en nombres flottants
    let tyreBuyPrice = parseFloat(tyreBuyPriceInput.value);
    let tyreMargin = parseFloat(tyreMarginInput.value);
    let tyreBF = parseFloat(tyreBFInput.value);

    // Calculs
    let shopPrice = tyreBuyPrice + tyreMargin;
    let remise = ((shopPrice - tyreBF)/tyreBF)*100;

    // Création d'une nouvelle ligne dans le tableau
    let tbody = document.querySelector('#table tbody');
    let newRow = tbody.insertRow();
    let cells = [
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell()
    ];

    // Remplissage des cellules avec les données calculées
    cells[0].textContent = tyreBuyPrice.toFixed(2) + "€";
    cells[1].textContent = tyreMargin.toFixed(2) + "€";
    cells[2].textContent = shopPrice.toFixed(2) + "€";
    cells[3].textContent = tyreBF.toFixed(2) + "€";
    cells[4].innerHTML = "<span style='font-weight: bold; color: green;'>" + remise.toFixed(2) + "%</span>";
});

document.getElementById('clear-btn').addEventListener('click', function(){
    // Effacement des lignes ajoutées
    let tbody = document.querySelector('#table tbody');
    tbody.innerHTML = '';
});
