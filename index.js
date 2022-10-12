import ('colors');

import { 
    inquirerMenu,
    leerInput,
    pausa
} from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';


const main = async() => {

    const busquedas = new Busquedas();
    let opt = '';

    do{

        opt = await inquirerMenu();
        
        switch(opt){

            // Buscar ciudad
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ingrese ciudad: ');
                console.log(lugar);
                await busquedas.ciudad(lugar);

                // Buscar los lugares

                // Seleccionar el lugar

                // Datos de clima relacionados a Geolocation

                // Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad; ', );
                console.log('Lat: ', );
                console.log('Lng: ', );
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