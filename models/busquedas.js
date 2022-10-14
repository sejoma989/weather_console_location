import fs from 'fs';

import axios from 'axios';


class Busquedas {

    historial = [];
    dbPath = './db/database.json';

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

    get paramsOpenWeather(){
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    async climaLugar(lat, lon){
        try {
            // instance axios.create()
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsOpenWeather, lat, lon}
            });
            // return resp.data
            const resp = await instance.get();
            const {weather, main} = resp.data;
            // console.log(weather[0].description);
            // console.log(main.temp);
            // console.log(main.temp_min);
            // console.log(main.temp_max);

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial(lugar = ''){

        // TODO: Prevenir duplicados
        if( this.historial.includes( lugar.toLocaleLowerCase() ) ){
            return;
        }

        // cargar info en memoria
        this.historial.unshift( lugar.toLocaleLowerCase() );

        // Grabar en DB
        this.guardarDB()
    }

        
    guardarDB() {

        const payload = {
            historial: this.historial
        };

        fs.writeFileSync( this.dbPath, JSON.stringify( payload ) );
    }

    leerDB() {

    }


}

export { Busquedas };