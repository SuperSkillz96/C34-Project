class Ground
{
    constructor(x, y, w, h)
    {
        this.body = Bodies.rectangle(x, y, w, h);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage('ground.png')
        World.add(world, this.body);
    }

    show()
    {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}