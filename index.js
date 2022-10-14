import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import ('colors');

import { 
    inquirerMenu,
    listarLugares,
    leerInput,
    pausa
} from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';

console.log(process.env.MAPBOX_KEY);

const main = async() => {

    const busquedas = new Busquedas();
    let opt = '';

    do{

        opt = await inquirerMenu();
        
        switch(opt){

            // Buscar ciudad
            case 1:
                // Mostrar mensaje
                const terminoBusqueda = await leerInput('Ingrese ciudad: ');
                
                // Buscar los lugares
                const lugares = await busquedas.ciudades( terminoBusqueda );
                
                // Seleccionar el lugar
                const id = await listarLugares(lugares);

                if(id === '0') continue;

                const lugarSel = lugares.find( l => l.id === id );

                // Guardar en DB
                busquedas.agregarHistorial(lugarSel.nombre);

                // Datos de clima relacionados a Geolocation
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                // Mostrar resultados
                console.clear()
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad; ', lugarSel.nombre); 
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Mínima: ', clima.min);
                console.log('Máxima: ', clima.max);
                console.log('Como esta el clima: ', clima.desc.green);
            break;
                
            // Mostrar historial
            case 2:
                busquedas.historial.forEach( (lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                })
            break

        }

        if(opt !==0 ) await pausa();        

    } while(opt !== 0);

}

main();