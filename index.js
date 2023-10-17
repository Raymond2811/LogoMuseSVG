const inquirer = require('inquirer');
const fs = require('fs');
const {generateShape} = require('./lib/shapes.js');

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

function init() {
    inquirer.prompt(questions).then((answers)=> {
        const {shape, shapeColor, logoName, textColor} = answers;
        const shapeSVG = generateShape(shape,shapeColor);
        const textSVG = `<text x="118" y="110" fill="${textColor}" style="font-size: 35">${logoName} </text>`;

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