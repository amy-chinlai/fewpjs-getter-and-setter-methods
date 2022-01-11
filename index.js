class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter(){
        return 2 * this.radius
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return (this.radius ** 2) * Math.PI
    }

    set diameter(newDiameter) {
        return this.radius = newDiameter / 2
    }

    set circumference(newCircumference) {
        return this.radius = (newCircumference /2) / Math.PI
    }

    set area(newArea) {
        return this.radius =  Math.sqrt(newArea / Math.PI)
    }
}