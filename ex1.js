// キャンバスを作る
// ボールを作る
// ボールを動かす
// itemを作る
// itemを取る -> point up
// itemがrandomに出現
// エリア外でgameOver

let ball;
let iteml;
let point = 0;
const size = 30;


function setup() {
    createCanvas(600, 600);
    frameRate(30)
    ball = new Ball();
    item = new Item();
}

function draw() {
    background("black");
    ball.show();
    ball.move();

    item.show();
    fill("white")
    textSize(30)
    text(point, 500, 550)

    if (ball.touch(item.body)) {
        item.move();
    }
    if (ball.end()) {
        background("black");
        textSize(30);
        text("GameOver!!", 300, 300);
        text(point, 300, 350);
    }
}

class Ball {
    constructor() {
        this.body = createVector(width / 2, height / 2);
        this.x = 3;
        this.y = 3;
    }
    show() {
        fill("white");
        ellipse(this.body.x, this.body.y, size);
    }

    move() {
        if (keyCode === RIGHT_ARROW) {
            this.body.x += this.x;
        } else if (keyCode === LEFT_ARROW) {
            this.body.x += -this.x;
        } else if (keyCode === UP_ARROW) {
            this.body.y += -this.y;
        } else if (keyCode === DOWN_ARROW) {
            this.body.y += this.y;
        }
    }

    touch(vec) {
        let d = sqrt((this.body.x - vec.x) ** 2 + (this.body.y - vec.y) ** 2);
        if (d < size - 5) {
            this.x += 0.5;
            this.y += 0.5;
            point += 10;
            return true;
        }
    }
    end() {
        if (this.body.x > width || this.body.x < 0 || this.body.y > height || this.body.y < 0) {
            return true;
        }
    }
}

class Item {
    constructor() {
        let x = size * floor(random(0, width / size));
        let y = size * floor(random(0, height / size));

        this.body = createVector(x, y)
    }
    show() {
        fill("red");
        ellipse(this.body.x, this.body.y, size);
    }

    move() {
        let x = size * floor(random(0, width / size));
        let y = size * floor(random(0, height / size));
        this.body.x = x;
        this.body.y = y;
    }
}