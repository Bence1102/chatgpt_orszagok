export function HTMLosszeallit(lista, szulo) {
    lista.forEach(obj => {
        egyOrszag(obj, szulo);
    });
}

export function egyOrszag(obj, szulo) {
    // Közvetlenül HTML kódként adjuk hozzá az ország div-t
    const orszagHTML = `
        <div class="orszag">
            <h3>${obj.nev}</h3>
            <p>Népesség: ${obj.nepesseg.toLocaleString()} fő</p>
        </div>
    `;
    
    // Az új HTML-t hozzáadjuk a szülő elemhez
    szulo.innerHTML += orszagHTML;
}
