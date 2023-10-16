const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type:'input',
        name:'logoName',
        message:'Enter logo name(max 3 characters):',
        validate: (input) => {
            if(input.length === 3){
                return true;
            }else{
                return "Please enter a logo name with a maximum of 3 characters.";
            }
        },
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
            return `<polygon points="150,40 100,130 200,130" fill="${shapeColor}" />`;
        case 'square':
            return `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
    }
}

function init() {
    inquirer.prompt(questions).then((answers)=> {
        const {shape, shapeColor, logoName, textColor} = answers;
        const shapeSVG = generateShape(shape,shapeColor);
        const textSVG = `<text x="137" y="100" fill="${textColor}">${logoName}</text>`;

        const svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        ${textSVG}
        </svg>
        `;
        writeToFile('logo.svg', svg);
    }); 
};

function writeToFile(fileName,data) {
    fs.writeFile (fileName,data, (err) => {
        if(err) {
            console.error('Error generating logo:',err)
        }else{
            console.log('Generated logo.svg successfully!')
        }
    })
};
init();