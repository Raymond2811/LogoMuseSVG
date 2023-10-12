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
        choices: ['circle','triangle','square',],
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Enter a shape color(OR a hexadecimal number):',
    }
];

function init() {

}

init();