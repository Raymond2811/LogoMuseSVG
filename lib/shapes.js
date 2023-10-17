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

class Shape {
    constructor(){
        this.color = 'black';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render(){
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = {generateShape, Circle, Triangle,Square};