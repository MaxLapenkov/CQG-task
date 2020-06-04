//fix rectangle, fix line, optional borders

const canvas = document.getElementById('myCanvas'),
      ctx = canvas.getContext("2d");


class Line {
    constructor(coords, color = "#000", lineWidth = 10){
        this.startX = coords.startX;
        this.startY = coords.startY;
        this.endX = coords.endX;
        this.endY = coords.endY;
        this.color = color;
        this.lineWidth = lineWidth
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.color
        ctx.stroke();
        ctx.closePath();
    }
}
class Rectangle {
    constructor(coords, color = "#000", background = "rgba(255, 0, 0, 0.6)", borderWidth = 5){
        this.startX = coords.startX;
        this.startY = coords.startY;
        this.width = coords.width;
        this.height = coords.height;
        this.color = color;
        this.background = background;
        this.borderWidth = borderWidth;
    }
    draw(){
            //draw figure
            ctx.fillStyle=this.background;
            ctx.fillRect(this.startX, this.startY, this.width, this.height);
            //draw border
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.borderWidth;
            ctx.strokeRect(this.startX, this.startY, this.width, this.height);
    }
}

class Triangle {
    constructor(coords, color = "#000", background = "rgba(255, 0, 0, 1)", borderWidth = 5) {
        this.firstX = coords.firstX;
        this.firstY = coords.firstY;
        this.secondX = coords.secondX;
        this.secondY = coords.secondY;
        this.thirdX = coords.thirdX;
        this.thirdY = coords.thirdY;
        this.color = color;
        this.background = background;
        this.borderWidth = borderWidth;
    }
    draw() {
        //draw figure
        ctx.beginPath();
        ctx.moveTo(this.firstX, this.firstY);
        ctx.lineTo(this.secondX, this.secondY);
        ctx.lineTo(this.thirdX, this.thirdY);
        ctx.fillStyle=this.background;
        ctx.fill();

        //draw border
        ctx.beginPath();
        ctx.moveTo(this.firstX, this.firstY);
        ctx.lineTo(this.secondX, this.secondY);
        ctx.lineTo(this.thirdX, this.thirdY);
        ctx.strokeStyle = this.color
        ctx.lineWidth = this.borderWidth;
        ctx.stroke();
        ctx.closePath();
    }
}
class Circle {
    constructor(coords, borderWidth = 0, color = "#000", background = "rgba(255, 0, 0, 1)") {
        this.startX = coords.startX;
        this.startY = coords.startY;
        this.radius = coords.radius;
        this.color = color;
        this.background = background;
        this.borderWidth = borderWidth;
    }
    draw() {
        //draw figure
        ctx.beginPath();
        ctx.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle=this.background;
        ctx.fill();


        //draw border
        ctx.beginPath();
        ctx.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.borderWidth;
        ctx.stroke();
        ctx.closePath();
    }
}
class Ellipse {
    constructor(coords, color = "#000", background = "rgba(255, 0, 0, 1)", borderWidth = 5) {
        this.startX = coords.startX;
        this.startY = coords.startY;
        this.radiusX = coords.radiusX;
        this.radiusY = coords.radiusY;
        this.rotation = coords.rotation;
        this.color = color;
        this.background = background;
        this.borderWidth = borderWidth;
    }
    draw() {

        ctx.beginPath();
        ctx.ellipse(this.startX, this.startY, this.radiusX, this.radiusY, this.rotation, 0, 2 * Math.PI);
        ctx.fillStyle=this.background;
        ctx.fill();
        //draw border
        ctx.beginPath();
        ctx.ellipse(this.startX, this.startY, this.radiusX, this.radiusY, this.rotation, 0, 2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.borderWidth;
        ctx.stroke();
    }
}
const ellipse = new Ellipse (
    coords = {
            startX: 500,
            startY: 400,
            radiusX: 100,
            radiusY: 50,
            rotation: Math.PI / 6
        }
)
ellipse.draw(); 
// const circle = new Circle (
//     coords = {
//         startX: 500,
//         startY: 400,
//         radius: 100
//     },
// )
// const circle2 = new Circle (
//     coords = {
//         startX: 100,
//         startY: 100,
//         radius: 20
//     }
// )
// circle.draw()
// circle2.draw()
// const triangle = new Triangle(
//     coords = {
//         firstX: 100,
//         firstY: 100,
//         secondX: 200,
//         secondY: 100,
//         thirdX: 150,
//         thirdY: 200
//     }
// )

// const rectangle = new Rectangle(
//     coords = {
//         startX: 10,
//         startY: 10,
//         width: 500,
//         height: 500
//     },
//     color = 'blue',
//     background = "rgba(0, 255, 0, 0.6)",
//     borderWidth = 25
// )
// rectangle.draw();
// triangle.draw();
// const line = new Line(
//     coords = {
//     startX: 0,
//     startY: 0,
//     endX: 500,
//     endY: 500
//     },
//     color = "red",
// );
// // line.draw()
// const line2 = new Line(
//     coords = {
//     startX: 1000,
//     startY: 800,
//     endX: 500,
//     endY: 500
//     },
//     color = "green",
// );
// line.draw()
// line2.draw()

