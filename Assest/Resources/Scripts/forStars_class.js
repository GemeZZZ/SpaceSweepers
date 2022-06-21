class bgStart
{
	constructor(x,y,radius,speed)
	{
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.speed=speed;
	}

	draw()
	{
		c.beginPath();
		c.arc(this.x,this.y,this.radius,Math.PI*2,false);
		c.fillStyle = "white";
		c.fill();
		c.closePath();
	}

	update()
	{
		this.draw();
		if(this.y+this.radius>=canvas.height+100)
		{
			this.y=-200;
		}
		else
		{
			this.y+=this.speed;
		}
	}
}