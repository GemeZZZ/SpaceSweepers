class rock
{
	constructor(position,velocity,color,radius)
	{
		this.position=position;
		this.velocity=velocity;
		this.color=color;
		this.radius=radius;
		this.baseY = this.velocity.y;
		this.baseX = this.velocity.x;
		this.spriteWidth = 512;
		this.spriteHeight = 512;
		this.frame=0;
		this.frameX=0;
		this.frameY=0;
		this.possibleAngle = Math.random();
	}

	draw()
	{
		/*c.beginPath();
		c.arc(this.position.x,this.position.y,this.radius,Math.PI*2,false);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();*/

		c.save();
		c.translate(this.position.x,this.position.y);
		if(this.possibleAngle>=0.5)
		{
			c.rotate(angle);
		}
		else
		{
			c.rotate(reverseAngle);
		}
		c.drawImage(rockSheet,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,0
			-this.radius,0-this.radius,this.radius*2,this.radius*2);
		c.restore();
	}

	update()
	{
		this.draw();
		this.velocity.y += 0.01;
		this.position.y += this.velocity.y;
		this.position.x += this.velocity.x;

		if(this.position.y - this.radius <=0)
		{
			this.position.y += 10;
			this.velocity.y *= -0.8;
		}

		if(this.position.x + this.radius >= canvas.width)
		{
			this.position.x -= 10;
			this.velocity.x *= -0.8;
		}

		if(this.position.x - this.radius <= 0)
		{
			this.position.x += 10;
			this.velocity.x *= -0.8;	
		}

		if(Math.floor(this.velocity.y)==0)
		{
			this.velocity.y = this.baseY;
		}
		if(Math.floor(this.velocity.x)==0)
		{
			this.velocity.x = this.baseX;
		}
	}
}
/*
class sub_rock
{
	constructor(position,velocity,color,radius)
	{
		this.position=position;
		this.velocity=velocity;
		this.color=color;
		this.radius=radius;
		this.baseY = this.velocity.y;
		this.baseX = this.velocity.x;
	}

	draw()
	{
		c.beginPath();
		c.arc(this.position.x,this.position.y,this.radius,Math.PI*2,false);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	}

	update()
	{
		this.draw();
		this.velocity.y += 0.01;
		this.position.y += this.velocity.y;
		this.position.x += this.velocity.x;

		if(this.position.y + this.radius >= canvas.height)
		{
			this.position.y -= 10;
			this.velocity.y *= -0.8;
		}

		if(this.position.y - this.radius <=0)
		{
			this.position.y += 10;
			this.velocity.y *= -0.8;
		}

		if(this.position.x + this.radius >= canvas.width)
		{
			this.position.x -= 10;
			this.velocity.x *= -0.8;
		}

		if(this.position.x - this.radius <= 0)
		{
			this.position.x += 10;
			this.velocity.x *= -0.8;	
		}

		if(Math.floor(this.velocity.y)==0)
		{
			this.velocity.y = this.baseY;
		}
		if(Math.floor(this.velocity.x)==0)
		{
			this.velocity.x = this.baseX;
		}
	}
}*/