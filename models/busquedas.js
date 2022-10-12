import axios from 'axios';


class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor(){
        // TODO: Leer DB si existe

    }

    async ciudad(lugar = ''){

        // Peticion HTTP
        console.log('Ciudad: ',lugar);

        return [];
    }
}

export { Busquedas };