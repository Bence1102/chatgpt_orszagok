export function HTMLosszeallit(lista, szulo) {
    lista.forEach(obj => {
        egyOrszag(obj, szulo);
    });
}

export function egyOrszag(obj, szulo) {
    
    const orszagHTML = `
        <div class="orszag">
            <h3>${obj.nev}</h3>
            <p>Népesség: ${obj.nepesseg.toLocaleString()} fő</p>
        </div>
    `;
    
   
    szulo.innerHTML += orszagHTML;
}
