import axios from 'axios';


class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor(){
        // TODO: Leer DB si existe

    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudades(lugar = ''){

        try {
            // Peticion HTTP
            // https://api.mapbox.com/geocoding/v5/mapbox.places/san%20jose.json?limit=6&language=es&access_token=pk.eyJ1Ijoic2Vqb21hOTg5IiwiYSI6ImNsOTYxaGIzYTJqNjIzbnA4N290cGtzOTQifQ.WPC6eOgWsF1yCS6bTZFJqw

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });
            
            const resp = await instance.get();
            // console.log(resp.data.features);
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));
            
        } catch (error) {
            return [];  // retorna los lugares
        }

    }
}

export { Busquedas };