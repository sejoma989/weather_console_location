import axios from 'axios';


class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor(){
        // TODO: Leer DB si existe

    }

    get paramsMapBox() {
        return {
            'access_token': 'pk.eyJ1Ijoic2Vqb21hOTg5IiwiYSI6ImNsOTYxaGIzYTJqNjIzbnA4N290cGtzOTQifQ.WPC6eOgWsF1yCS6bTZFJqw',
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = ''){

        try {
            // Peticion HTTP
            // https://api.mapbox.com/geocoding/v5/mapbox.places/san%20jose.json?limit=6&language=es&access_token=pk.eyJ1Ijoic2Vqb21hOTg5IiwiYSI6ImNsOTYxaGIzYTJqNjIzbnA4N290cGtzOTQifQ.WPC6eOgWsF1yCS6bTZFJqw

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            });
            
            const resp = await instance.get();
            console.log(resp.data);
            
            return [];  // retorna los lugares
            
        } catch (error) {
            return [];  // retorna los lugares
        }

    }
}

export { Busquedas };