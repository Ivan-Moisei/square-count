function showResultInDomKvadrat() {
    const sideLength = document.getElementById('dlinaStoroniKvadrata').value;
    const result = document.getElementById('ploschadKvadrata');
    result.innerHTML = `<td>${(Math.pow(sideLength, 2))}</td>`
}

function showResultInDomPriamougolnika() {
    const firstSideLength = document.getElementById('pervayaStoronaPriamougolnika').value;
    const secondSideLength = document.getElementById('drugayaStoronaPriamougolnika').value;
    const result = document.getElementById('ploschadPriamougolnika');
    result.innerHTML = `<td>${(firstSideLength * secondSideLength)}</td>`
}

function showResultInDomParalelograma() {
    const SideLength = document.getElementById('dlinaStoronyParalelograma').value;
    const heightLength = document.getElementById('dlinaVisotyParalelograma').value;
    const result = document.getElementById('ploschadParalelograma');
    result.innerHTML = `<td>${(SideLength * heightLength)}</td>`
}

function showResultInDomRomba() {
    const SideLength = document.getElementById('dlinaStoronyRomba').value;
    const heightLength = document.getElementById('dlinaVisotyRomba').value;
    const result = document.getElementById('ploschadRomba');
    result.innerHTML = `<td>${(SideLength * heightLength)}</td>`
}