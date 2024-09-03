class Rectangle {
    constructor(name, height, width) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() {
        return this.height * this.width;
    }

    getClass() {
        return 'Rectangle';
    }
}

const rect = new Rectangle('Rect',10 , 10);
console.log(rect.area());
console.log(rect.getClass());