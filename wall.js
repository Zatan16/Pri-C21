class Wall {
    constructor(x, y, w, h) {

        const options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(255, 165, 0);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}