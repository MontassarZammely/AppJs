// Récupérer les éléments
const millionairesList = document.getElementById('millionaires-list');
const totalFortuneElement = document.getElementById('total-fortune');
const nameValueElement = document.getElementById('name-value');
const fortuneValueElement = document.getElementById('fortune-value');

// Tableau qui stocke les millionnaires
let millionaires = [];

// Flag to determine whether to show only millionaires
let showOnlyMillionaires = false;

// Fonction pour générer un millionnaire aléatoire 
function generateFakeMillionaire() {
    const names = ['Mohamed hama', 'Khalil Zammel', 'Haythem timo', 'Jihene Matoussi', 'Ali Mejri', 'Montassar Zammel'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomFortune = Math.floor(Math.random() * (1000000 - 100000) + 100000);

    return {
        name: randomName,
        fortune: randomFortune
    };
}

// Fonction pour ajouter un millionnaire
function addFakeMillionaire() {
    const fakeMillionaire = generateFakeMillionaire();
    millionaires.push(fakeMillionaire);
    updateList();
}

// Double la fortune d'un millionnaire
function doubleMoney() {
    millionaires = millionaires.map(function (m) {
        return { ...m, fortune: m.fortune * 2 };
    });
    updateList();
}

// Fonction pour calculer la somme totale de la fortune des millionnaires
function calculateTotalFortune() {
    const totalFortune = millionaires.reduce(function (sum, m) {
        return sum + m.fortune;
    }, 0);
    totalFortuneElement.textContent = `Total du fortune des millionaires : ${totalFortune} $`;
}

// Fonction pour trier les millionnaires par fortune
function sortMillionairesByMoney() {
    millionaires.sort(function (a, b) {
        return b.fortune - a.fortune;
    });
    updateList();
}

// Fonction pour mettre à jour la liste
function updateList() {
    millionairesList.innerHTML = '';
    
    if (showOnlyMillionaires) {
        // Parcourir chaque millionnaire
        millionaires.forEach(function (m) {
            const listItem = document.createElement('li');
            // Format du wealth
            const formattedFortune = m.fortune.toLocaleString('en-US', { maximumFractionDigits: 0 });
            
            listItem.innerHTML = `<strong>Nom:</strong> ${m.name}, <strong>Wealth:</strong> ${formattedFortune} $`;
            millionairesList.appendChild(listItem);
        });
    }


    // Récuperer le last millionaire ou intialiser l'attribut nom et fortune
    const latestMillionaire = millionaires[millionaires.length - 1] || { name: '', fortune: 0 };
    nameValueElement.textContent = latestMillionaire.name;
    fortuneValueElement.textContent = latestMillionaire.fortune.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

// Fonction pour faire l'affichage uniquement des millionnaires
function toggleShowOnlyMillionaires() {
    showOnlyMillionaires = !showOnlyMillionaires;
    updateList();
}
