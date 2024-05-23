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
    let remise = (( -1 * (shopPrice - tyreBF))/tyreBF)*100;
    let remiseInf = Math.floor(remise);
    let remiseSup = Math.ceil(remise);
    // Calcul du prix remisé
    let prixRemiseInf = (tyreBF - (tyreBF * (remiseInf / 100) )).toFixed(2);
    let prixRemiseSup = (tyreBF - (tyreBF * (remiseSup / 100) )).toFixed(2);
    // Calcul de la marge finale
    let margeFinaleInf = ((tyreBF - (tyreBF * remiseInf) / 100) - tyreBuyPrice).toFixed(2);
    let margeFinaleSup = ((tyreBF - (tyreBF * remiseSup) / 100) - tyreBuyPrice).toFixed(2);


    // Gestion du tableau de calcul de départ
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

    // Gestion du tableau de calcul en inversé
    // Création des nouvelles lignes dans le tableau
    let reversedtbody = document.querySelector('#reversed-table tbody');
    let newRowInf = reversedtbody.insertRow();
    let newRowSup = reversedtbody.insertRow();

    // Ajoute les cellules à la ligne pour l'arrondi inférieur
    let cellsInf = [
        newRowInf.insertCell(),
        newRowInf.insertCell(),
        newRowInf.insertCell(),
        newRowInf.insertCell()
    ];

    // Ajoute les cellules à la ligne pour l'arrondi supérieur
    let cellsSup = [
        newRowSup.insertCell(),
        newRowSup.insertCell(),
        newRowSup.insertCell(),
        newRowSup.insertCell()
    ];

    // Remplissage des cellules avec les données calculées
    cellsInf[0].rowSpan = 2;
    cellsInf[0].textContent = tyreBF.toFixed(2) + "€";
    cellsInf[1].textContent = remiseInf + "%";
    cellsInf[2].textContent = prixRemiseInf + "€";
    cellsInf[3].innerHTML = "<span style='font-weight: bold; color: green;'>" + margeFinaleInf + "€</span>";

    cellsSup[0].textContent = remiseSup + "%";
    cellsSup[1].textContent = prixRemiseSup + "€";
    cellsSup[2].innerHTML = "<span style='font-weight: bold; color: red;'>" + margeFinaleSup + "€</span>";
});

document.getElementById('clear-btn').addEventListener('click', function(){
    // Effacement des lignes ajoutées
    let tbody = document.querySelector('#table tbody');
    let reversedtbody = document.querySelector('#reversed-table tbody');
    tbody.innerHTML = '';
    reversedtbody.innerHTML='';
});
