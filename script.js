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
class Quadrangle {
    constructor(coords, borderWidth = 0, color, background) {
        this.firstX = coords.firstX;
        this.firstY = coords.firstY;
        this.secondX = coords.secondX;
        this.secondY = coords.secondY;
        this.thirdX = coords.thirdX;
        this.thirdY = coords.thirdY;
        this.fourthX = coords.fourthX;
        this.fourthY = coords.fourthY;
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
        ctx.lineTo(this.fourthX, this.fourthY );
        ctx.lineTo(this.firstX, this.firstY);
        ctx.fillStyle=this.background;
        ctx.fill();

        //draw border
        if(this.borderWidth > 0) {
            ctx.beginPath();
            ctx.moveTo(this.firstX, this.firstY);
            ctx.lineTo(this.secondX, this.secondY);
            ctx.lineTo(this.thirdX, this.thirdY);
            ctx.lineTo(this.fourthX, this.fourthY);
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

const drawLine = () => {
 
}
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
                widthString = '2',
                backgroundString = 'white';

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

        if(string.includes('triangle')) {
            let triangle = new Triangle(
                        coords = {
                            firstX: Number(coords[0]),
                            firstY: Number(coords[1]),
                            secondX: Number(coords[2]),
                            secondY: Number(coords[3]),
                            thirdX: Number(coords[4]),
                            thirdY: Number(coords[5]),
                        },
                        borderWidth = Number(widthString),
                        color = colorString,
                        background = backgroundString,
            )
            triangle.draw();
        }

        if(string.includes('quadrangle')) {
            let quadrangle = new Quadrangle(
                        coords = {
                            firstX: Number(coords[0]),
                            firstY: Number(coords[1]),
                            secondX: Number(coords[2]),
                            secondY: Number(coords[3]),
                            thirdX: Number(coords[4]),
                            thirdY: Number(coords[5]),
                            fourthX: Number(coords[6]),
                            fourthY: Number(coords[7]),
                        },
                        borderWidth = Number(widthString),
                        color = colorString,
                        background = backgroundString,
            )
            quadrangle.draw();
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
})