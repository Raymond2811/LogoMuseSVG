function generateShape(shape, shapeColor) {
    switch (shape) {
        case 'circle':
            return `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
        case 'triangle':
            return `<polygon points="150,40 100,130 200,130" fill="${shapeColor}" />`;
        case 'square':
            return `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
    }
};

module.exports = generateShape;