class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball

	var options={
		restitution:0.8,
		friction:3,
        density:30
	}

		this.body=Bodies.rectangle(x, y, width, height, options)
		World.add(world, this.body);
		this.width=width
		this.height=height

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			stroke("black");
			fill("red");
			rect(0, 0, this.width, this.height)
			pop()
	}

}