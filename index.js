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
                // console.log(terminoBusqueda);
                
                // Buscar los lugares
                const lugares = await busquedas.ciudades( terminoBusqueda );
                
                // Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id === id );
                console.log(lugarSel);

                // Datos de clima relacionados a Geolocation

                // Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad; ', lugarSel.nombre); 
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ', );
                console.log('Mínima: ',) ;
                console.log('Máxima: ', );
            break;
                
            // Mostrar historial
            case 2:
                console.log('listar el historial');
            break

        }

        if(opt !==0 ) await pausa();        

    } while(opt !== 0);

}

main();