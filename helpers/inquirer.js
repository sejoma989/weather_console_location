import inquirer from 'inquirer';
import 'colors';


const inquirerMenu = async() => {

    const questions = [
        {
            type: 'list',
            name: 'opcion',
            message: '¿Qué desea hacer?',
            choices: [
                {
                    value: 1,
                    name: `${'1.'.green} Buscar ciudad`
                },
                {
                    value: 2,
                    name: `${'2.'.green} Historial`
                },
                {
                    value: 0,
                    name: `${'0.'.green} Salir`
                },
            ]
        }
    ]

    console.clear();
    console.log('========================'.green);
    console.log('  Seleccione una opcion'.white);
    console.log('   Creada por @sejoma989  '.rainbow);
    console.log('======================== \n'.green);


    const { opcion } = await inquirer.prompt(questions);


    return opcion;
}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${ 'ENTER'.green } para continuar\n`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question)

}

const leerInput = async( message ) => {

    const question = [
        {
            type:'input',
            name:'desc',
            message,       // mensaje: message
            validate( value ) {
                if ( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;

}

const listarLugares = async( lugares = [] ) => {

    const choices = lugares.map( (lugar, i) => {

        const idx = `${ i + 1 }.`.green;

        return {
            value: lugar.id,
            name: `${ idx } ${lugar.nombre}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar: ',
            choices         // choices: choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message         // message: message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${ i + 1 }.`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${tarea.desc}`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices         // choices: choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

export { 
    inquirerMenu, 
    pausa, 
    leerInput,
    listarLugares, 
    confirmar,
    mostrarListadoChecklist
};
