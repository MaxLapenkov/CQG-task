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
    constructor(coords, borderWidth = 0, color = "#000", background = "rgba(255, 0, 0, 0.6)"){
        this.startX = coords.startX;
        this.startY = coords.startY;
        this.endX = coords.endX;
        this.endY = coords.endY;
        this.color = color;
        this.background = background;
        this.borderWidth = borderWidth;
    }
    draw(){
            //draw figure
            // ctx.fillStyle=this.background;
            // ctx.fillRect(this.startX, this.startY, this.width, this.height);
            ctx.beginPath();
            ctx.moveTo(this.startX, this.startY);
            ctx.lineTo(this.endX, this.startY);
            ctx.lineTo(this.endX, this.endY);
            ctx.lineTo(this.startX, this.endY);
            ctx.lineTo(this.startX, this.startY);
            ctx.fillStyle=this.background;
            ctx.fill();
            //draw border
            if(this.borderWidth > 0) {
                ctx.beginPath();
                ctx.moveTo(this.startX, this.startY);
                ctx.lineTo(this.endX, this.startY);
                ctx.lineTo(this.endX, this.endY);
                ctx.lineTo(this.startX, this.endY);
                ctx.lineTo(this.startX, this.startY);
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.borderWidth;
                ctx.stroke();
            }
    }
}

class Triangle {
    constructor(coords, borderWidth = 0, color = "#000", background = "rgba(255, 0, 0, 1)") {
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
        if(this.borderWidth > 0) {
            ctx.beginPath();
            ctx.moveTo(this.firstX, this.firstY);
            ctx.lineTo(this.secondX, this.secondY);
            ctx.lineTo(this.thirdX, this.thirdY);
            ctx.lineTo(this.firstX, this.firstY);
            ctx.strokeStyle = this.color
            ctx.lineWidth = this.borderWidth;
            ctx.stroke();
            ctx.closePath();
        }
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
        if(this.borderWidth > 0) {
            ctx.beginPath();
            ctx.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.borderWidth;
            ctx.stroke();
            ctx.closePath();
        }
    }
}
class Ellipse {
    constructor(coords, borderWidth = 0, color = "#000", background = "rgba(255, 0, 0, 1)") {
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
        //draw figure
        ctx.beginPath();
        ctx.ellipse(this.startX, this.startY, this.radiusX, this.radiusY, this.rotation, 0, 2 * Math.PI);
        ctx.fillStyle=this.background;
        ctx.fill();
        //draw border
        if(borderWidth > 0) {
            ctx.beginPath();
            ctx.ellipse(this.startX, this.startY, this.radiusX, this.radiusY, this.rotation, 0, 2 * Math.PI);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.borderWidth;
            ctx.stroke();
        }
    }
}
// line -p [50, 50] [100, 100] -c rgb(255, 0, 0) -b rgba(0, 255, 0, 0.3)
const input = document.getElementById('command-input'),
      btn = document.getElementById('input-btn');

btn.addEventListener('click', () => {
    let string = input.value;
    
            let newString = string.replace(/\s+/g, ''),
            indexP = newString.indexOf('-p'),
            indexC = newString.indexOf('-c'),
            indexB = newString.indexOf('-b'),
            coordsString = '',
            colorString = 'rgb(255, 0, 0)',
            backgroundString = 'rgba(255, 0, 0, 1)';
            console.log(newString, indexP, indexC)
            if(indexC != -1) {
                coordsString = newString.slice(indexP + 2, indexC);
            if(indexB != -1) {
                colorString = newString.slice(indexC + 2, indexB);
                backgroundString = newString.slice(indexB + 2);
            } else {
                colorString = newString.slice(indexC + 2);
            }
            } else if(indexB != -1) {
                coordsString = newString.slice(indexP + 2, indexB);
                backgroundString = newString.slice(indexB + 2);
            }
            else {
                coordsString = newString.slice(indexP + 2);
            }
        // colorString = newString.slice(indexC + 2);
        console.log(coordsString.split(']['));
        console.log(colorString);
        console.log(backgroundString);
    
     
    // .split('–c').split('–b')

})
// const ellipse = new Ellipse (
//     coords = {
//             startX: 500,
//             startY: 400,
//             radiusX: 100,
//             radiusY: 50,
//             rotation: Math.PI / 6
//         },
//         borderWidth = 10
// )
// ellipse.draw(); 
// const circle = new Circle (
//     coords = {
//         startX: 500,
//         startY: 400,
//         radius: 100
//     },
//     borderWidth = 4,
//     color = 'blue',
//     background = "rgba(0, 255, 0, 0.6)",
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
//     },
//     borderWidth = 2
// )

// const rectangle = new Rectangle(
//     coords = {
//         startX: 10,
//         startY: 10,
//         endX: 500,
//         endY: 500
//     },
//     borderWidth = 5,
//     color = 'blue',
//     background = "rgba(0, 255, 0, 0.6)",
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

