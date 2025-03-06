
import { orszagok } from './adat.js';
import { HTMLosszeallit } from './fuggveny.js';


document.addEventListener("DOMContentLoaded", () => {
    
    HTMLosszeallit(orszagok, document.getElementById("tarolo"));
});
