// Add your Circle class here

const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius
    }

    get circumference() {
        return Math.PI * (this.radius * 2)
    } 

    get area () {
        return Math.PI * (this.radius ** 2)
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.radius = circumference / ( pi * 2 )
    }
    
    set area(area) {
        this.radius = Math.sqrt( area / pi )
    }

}
