class Base
{
    constructor(x, y, w, h)
    {
        this.body = Bodies.rectangle(x, y, w, h);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage('platform.png')
        World.add(world, this.body);
    }

    show()
    {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        image(this.image, this.x, this.y, this.w, this.h);
        pop();
    }
}