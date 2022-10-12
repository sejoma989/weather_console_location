import ('colors');

import { 
    inquirerMenu,
    leerInput,
    pausa
} from './helpers/inquirer.js';


const main = async() => {

    let opt = '';
    do{
        opt = await inquirerMenu();
        console.log('\n ------ Creada por @sejoma989 -------'.green);
        console.log({opt});

        if(opt !==0 ) await pausa();

        // switch(opt){
        //     case 1:
        //         const ciudad = await leerInput('Ingrese ciudad: ');

        //     break;

        //     case 2:
        //         console.log('listar el historial');
        //     break

        // }
    } while(opt !== 0);
}

main();