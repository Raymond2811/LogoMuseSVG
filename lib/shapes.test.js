const {Circle,Triangle,Square} = require('./shapes.js');

describe('Circle', () => {
    it('should render a circle with the specified color',() => {
        const circle = new Circle;
        circle.setColor('green');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
    });
}); 

describe('Triangle',() => {
    it('it should render a triangle with the specified color', () => {
        const triangle = new Triangle;
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
});

describe('Square',() => {
    it('it should render a square with the specified color',() => {
        const square = new Square;
        square.setColor('red');
        expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="red" />')
    });
});
