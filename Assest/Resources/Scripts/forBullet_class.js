class bullet
{
	constructor(position,radius,velocity)
	{
		this.position=position;
		this.radius=radius;
		this.velocity=velocity;
		this.spriteWidth = 65;//65
		this.spriteHeight = 211;//211
	}

	draw()
	{
		/*c.beginPath();
		c.arc(this.position.x,this.position.y,this.radius,Math.PI*2,false);
		c.fillStyle = "white";
		c.fill();
		c.closePath();*/

		c.drawImage(bulletImg,this.position.x-15,this.position.y-15,this.spriteWidth/3,this.spriteHeight/3);
	}

	update()
	{
		this.draw();
		this.position.y-=this.velocity.y;
	}
}