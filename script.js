// сделать треугольник, трапецию, ромб
const canvas = document.getElementById('myCanvas'),
      ctx = canvas.getContext("2d");


class Line {
    constructor(coords, color, lineWidth = 10){
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
    constructor(coords, borderWidth = 0, color, background){
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
    constructor(coords, borderWidth = 0, color, background) {
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
    constructor(coords, borderWidth = 0, color, background) {
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
    constructor(coords, borderWidth = 0, color, background) {
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
// line -p [50, 50] [100, 100] -c hsl(0, 100%, 50%)
// circle -p [75, 75] -r1 25 -c rgb(255, 0, 0) -b rgba(0, 255, 0, 0.3)
// ellipse -p [75, 75] -rot 6 -r1 50 -r2 25 -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)
const input = document.getElementById('command-input'),
      btn = document.getElementById('input-btn');
      clear = document.getElementById('clear-btn');
clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})
btn.addEventListener('click', () => {
    let string = input.value;
    
            let newString = string.replace(/\s+/g, ''),
                indexP = newString.indexOf('-p'),
                indexC = newString.indexOf('-c'),
                indexB = newString.indexOf('-b'),
                indexR1 = newString.indexOf('-r1'),
                indexR2 = newString.indexOf('-r2'),
                indexRot = newString.indexOf('-rot'),
                indexW = newString.indexOf('-w'),
                coordsString = '',
                colorString = 'black',
                r1String = '50',
                r2String = '25',
                rotString = '2',
                widthString = '10',
                backgroundString = 'white';
            console.log(newString, indexP, indexC, indexR1, indexR2, indexRot, indexW)
            
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
            if(indexR1 != -1) {
                if(indexR2 != -1) {
                    r1String = newString.slice(indexR1 + 3, indexR2)
                }else if(indexC != -1) {
                    r1String = newString.slice(indexR1 + 3, indexC)
                } else if(indexB != -1) {
                    r1String = newString.slice(indexR1 + 3, indexB)
                } else {
                    r1String = newString.slice(indexR1 + 3)
                }   
            }
            if(indexR2 != -1) {
                r2String = newString.slice(indexR2 + 3, indexC)
            } else if(indexC != -1) {
                r2String = newString.slice(indexR2 + 3, indexB)
            }  else {
                r1String = newString.slice(indexR1 + 3)
            }
            if(indexRot != -1) {
                rotString =  newString.slice(indexRot + 4, indexR1);
            }
            if(indexW != -1) {
                if(indexRot != -1) {
                    widthString = newString.slice(indexW + 2, indexRot)
                } else if (indexR1 != -1) {
                    widthString = newString.slice(indexW + 2, indexR1)
                } else if (indexR2 != -1) {
                    widthString = newString.slice(indexW + 2, indexR2)
                } else if (indexC != -1) {
                    widthString = newString.slice(indexW + 2, indexC)
                } else if (indexB != -1) {
                    widthString = newString.slice(indexW + 2, indexB)
                } else {
                    widthString = newString.slice(indexW + 2)
                }
                
            }

        coordsString = coordsString.replace(/\[+/g, '').replace(/\]+/g, ',');
        coords = coordsString.split(',')
        coords.pop();

        if(string.includes('line')) {
            let line = new Line(
                coords = {
                    startX: Number(coords[0]),
                    startY: Number(coords[1]),
                    endX: Number(coords[2]),
                    endY: Number(coords[3])
                    },
                    color = colorString,
                    lineWidth = Number(widthString)
            )
            line.draw();
        }
        if(string.includes('rectangle')) {
            let rectangle = new Rectangle(
                    coords = {
                        startX: Number(coords[0]),
                        startY: Number(coords[1]),
                        endX: Number(coords[2]),
                        endY: Number(coords[3])
                    },
                        borderWidth = Number(widthString),
                        color = colorString,
                        background = backgroundString,
            )
            rectangle.draw();
        }
        if(string.includes('circle')) {
            let circle = new Circle(
                    coords = {
                             startX: Number(coords[0]),
                             startY: Number(coords[1]),
                             radius: Number(r1String)
                    },
                        borderWidth = Number(widthString),
                        color = colorString,
                        background = backgroundString,
            )
            circle.draw();
        }
        if(string.includes('ellipse')) {
            let ellipse = new Ellipse(
                    coords = {
                             startX: Number(coords[0]),
                             startY: Number(coords[1]),
                             radiusX: Number(r1String),
                             radiusY: Number(r2String),
                             rotation: Math.PI / Number(rotString)
                    },
                        borderWidth = Number(widthString),
                        color = colorString,
                        background = backgroundString,
            )
            ellipse.draw();
        }
        console.log(coords);
        console.log(coordsString);
        
        console.log(colorString);
        console.log(backgroundString);
        console.log(r1String);
        console.log(rotString);

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

