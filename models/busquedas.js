import axios from 'axios';


class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor(){
        // TODO: Leer DB si existe

    }

    async ciudad(lugar = ''){

        try {
            // Peticion HTTP
            // console.log('Ciudad: ',lugar);
    
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
            
            return [];  // retorna los lugares
            
        } catch (error) {
            return [];  // retorna los lugares
        }

    }
}

export { Busquedas };