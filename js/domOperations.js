function showResultInDomKvadrat() {
    const a = document.getElementById('dlinaStoroniKvadrata').value;
    const result = document.getElementById('ploschadKvadrata');
    result.innerHTML = `<td>${squareArea(a)}</td>`;
}

function showResultInDomPriamougolnika() {
    const a = document.getElementById('pervayaStoronaPriamougolnika').value;
    const b = document.getElementById('drugayaStoronaPriamougolnika').value;
    const result = document.getElementById('ploschadPriamougolnika');
    result.innerHTML = `<td>${rectangleArea(a, b)}</td>`;
}

function showResultInDomParalelograma() {
    const a = document.getElementById('dlinaStoronyParalelograma').value;
    const h = document.getElementById('dlinaVisotyParalelograma').value;
    const result = document.getElementById('ploschadParalelograma');
    result.innerHTML = `<td>${parallelogramArea(a, h)}</td>`;
}

function showResultInDomRomba() {
    const a = document.getElementById('dlinaStoronyRomba').value;
    const h = document.getElementById('dlinaVisotyRomba').value;
    const result = document.getElementById('ploschadRomba');
    result.innerHTML = `<td>${rhombusArea(a, h)}</td>`;
}