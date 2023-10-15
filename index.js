const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type:'input',
        name:'logoName',
        message:'Enter logo name(max 3 characters):',
    },
    {
        type:'input',
        name:'textColor',
        message:'Enter a text color(OR a hexadecimal number):',
    },
    {
        type:'list',
        name:'shape',
        message:'Choose a shape:',
        choices: ['circle','triangle','square'],
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Enter a shape color(OR a hexadecimal number):',
    }
];

function generateShape(shape, shapeColor) {
    switch (shape) {
        case 'circle':
            return `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
        case 'triangle':
            return `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
        case 'square':
            return `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
    }
}

function init() {
    inquirer.prompt(questions).then((answers)=> {
        const {shape, shapeColor, logoName, textColor} = answers;
        const shapeSVG = generateShape(shape,shapeColor);

    }); 
}

init();